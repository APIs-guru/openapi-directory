import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHEVIDENCECONTENT_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class FetchEvidenceContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class FetchEvidenceContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=evidence_id" })
  evidenceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=file_id" })
  fileId: string;
}


export class FetchEvidenceContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FetchEvidenceContentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchEvidenceContentPathParams;

  @Metadata()
  queryParams: FetchEvidenceContentQueryParams;

  @Metadata()
  security: FetchEvidenceContentSecurity;
}


export class FetchEvidenceContentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
