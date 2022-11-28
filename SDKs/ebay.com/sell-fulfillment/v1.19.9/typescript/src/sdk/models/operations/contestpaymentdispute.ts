import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ContestPaymentDisputeServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class ContestPaymentDisputePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class ContestPaymentDisputeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class ContestPaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ContestPaymentDisputePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ContestPaymentDisputeRequest;

  @SpeakeasyMetadata()
  security: ContestPaymentDisputeSecurity;
}


export class ContestPaymentDisputeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
