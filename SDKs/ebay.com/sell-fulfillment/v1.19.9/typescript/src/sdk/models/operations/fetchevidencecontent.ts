import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchEvidenceContentServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class FetchEvidenceContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class FetchEvidenceContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence_id" })
  evidenceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_id" })
  fileId: string;
}


export class FetchEvidenceContentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FetchEvidenceContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchEvidenceContentPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchEvidenceContentQueryParams;

  @SpeakeasyMetadata()
  security: FetchEvidenceContentSecurity;
}


export class FetchEvidenceContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
