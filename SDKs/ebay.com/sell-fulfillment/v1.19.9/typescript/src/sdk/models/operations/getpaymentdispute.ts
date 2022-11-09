import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETPAYMENTDISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class GetPaymentDisputePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class GetPaymentDisputeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentDisputeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetPaymentDisputePathParams;

  @Metadata()
  security: GetPaymentDisputeSecurity;
}


export class GetPaymentDisputeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentDispute?: shared.PaymentDispute;

  @Metadata()
  statusCode: number;
}
