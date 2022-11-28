import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UploadEvidenceFileServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class UploadEvidenceFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class UploadEvidenceFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UploadEvidenceFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UploadEvidenceFilePathParams;

  @SpeakeasyMetadata()
  security: UploadEvidenceFileSecurity;
}


export class UploadEvidenceFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileEvidence?: shared.FileEvidence;

  @SpeakeasyMetadata()
  statusCode: number;
}
