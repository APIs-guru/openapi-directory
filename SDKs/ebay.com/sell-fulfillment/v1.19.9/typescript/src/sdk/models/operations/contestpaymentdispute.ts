import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CONTESTPAYMENTDISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class ContestPaymentDisputePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class ContestPaymentDisputeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class ContestPaymentDisputeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ContestPaymentDisputePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ContestPaymentDisputeRequest;

  @Metadata()
  security: ContestPaymentDisputeSecurity;
}


export class ContestPaymentDisputeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
