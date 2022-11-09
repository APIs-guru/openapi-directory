import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETACTIVITIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
];



export class GetActivitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class GetActivitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetActivitiesPathParams;

  @Metadata()
  security: GetActivitiesSecurity;
}


export class GetActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentDisputeActivityHistory?: shared.PaymentDisputeActivityHistory;

  @Metadata()
  statusCode: number;
}
