import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const ACCEPTPAYMENTDISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class AcceptPaymentDisputePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class AcceptPaymentDisputeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class AcceptPaymentDisputeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: AcceptPaymentDisputePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AcceptPaymentDisputeRequest;

  @Metadata()
  security: AcceptPaymentDisputeSecurity;
}


export class AcceptPaymentDisputeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
