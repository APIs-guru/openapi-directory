import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetActivitiesServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class GetActivitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class GetActivitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetActivitiesPathParams;

  @SpeakeasyMetadata()
  security: GetActivitiesSecurity;
}


export class GetActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentDisputeActivityHistory?: shared.PaymentDisputeActivityHistory;

  @SpeakeasyMetadata()
  statusCode: number;
}
