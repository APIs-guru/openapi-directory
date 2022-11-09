import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEEVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class UpdateEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class UpdateEvidenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateEvidencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateEvidencePaymentDisputeRequest;

  @Metadata()
  security: UpdateEvidenceSecurity;
}


export class UpdateEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
