import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const AcceptPaymentDisputeServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class AcceptPaymentDisputePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class AcceptPaymentDisputeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class AcceptPaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: AcceptPaymentDisputePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AcceptPaymentDisputeRequest;

  @SpeakeasyMetadata()
  security: AcceptPaymentDisputeSecurity;
}


export class AcceptPaymentDisputeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
