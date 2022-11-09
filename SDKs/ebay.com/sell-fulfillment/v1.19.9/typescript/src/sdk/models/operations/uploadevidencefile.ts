import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPLOADEVIDENCEFILE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class UploadEvidenceFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class UploadEvidenceFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UploadEvidenceFileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UploadEvidenceFilePathParams;

  @Metadata()
  security: UploadEvidenceFileSecurity;
}


export class UploadEvidenceFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileEvidence?: shared.FileEvidence;

  @Metadata()
  statusCode: number;
}
