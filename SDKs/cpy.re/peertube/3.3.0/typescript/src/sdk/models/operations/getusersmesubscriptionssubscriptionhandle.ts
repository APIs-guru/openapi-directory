import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeSubscriptionsSubscriptionHandlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionHandle" })
  subscriptionHandle: string;
}


export class GetUsersMeSubscriptionsSubscriptionHandleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeSubscriptionsSubscriptionHandleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersMeSubscriptionsSubscriptionHandlePathParams;

  @SpeakeasyMetadata()
  security: GetUsersMeSubscriptionsSubscriptionHandleSecurity;
}


export class GetUsersMeSubscriptionsSubscriptionHandleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoChannel?: any;
}
