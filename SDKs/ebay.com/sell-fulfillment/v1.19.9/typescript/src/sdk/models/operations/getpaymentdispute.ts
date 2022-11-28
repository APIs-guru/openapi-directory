import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetPaymentDisputeServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class GetPaymentDisputePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class GetPaymentDisputeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetPaymentDisputePathParams;

  @SpeakeasyMetadata()
  security: GetPaymentDisputeSecurity;
}


export class GetPaymentDisputeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentDispute?: shared.PaymentDispute;

  @SpeakeasyMetadata()
  statusCode: number;
}
