import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const ADDEVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class AddEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class AddEvidenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class AddEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: AddEvidencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AddEvidencePaymentDisputeRequest;

  @Metadata()
  security: AddEvidenceSecurity;
}


export class AddEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  addEvidencePaymentDisputeResponse?: shared.AddEvidencePaymentDisputeResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
