import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeSubscriptionsSubscriptionHandlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionHandle" })
  subscriptionHandle: string;
}


export class GetUsersMeSubscriptionsSubscriptionHandleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeSubscriptionsSubscriptionHandleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersMeSubscriptionsSubscriptionHandlePathParams;

  @Metadata()
  security: GetUsersMeSubscriptionsSubscriptionHandleSecurity;
}


export class GetUsersMeSubscriptionsSubscriptionHandleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoChannel?: any;
}
