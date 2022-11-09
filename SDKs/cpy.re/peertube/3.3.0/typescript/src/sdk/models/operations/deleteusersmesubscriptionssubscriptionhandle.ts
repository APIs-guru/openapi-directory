import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUsersMeSubscriptionsSubscriptionHandlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionHandle" })
  subscriptionHandle: string;
}


export class DeleteUsersMeSubscriptionsSubscriptionHandleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteUsersMeSubscriptionsSubscriptionHandleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUsersMeSubscriptionsSubscriptionHandlePathParams;

  @Metadata()
  security: DeleteUsersMeSubscriptionsSubscriptionHandleSecurity;
}


export class DeleteUsersMeSubscriptionsSubscriptionHandleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
