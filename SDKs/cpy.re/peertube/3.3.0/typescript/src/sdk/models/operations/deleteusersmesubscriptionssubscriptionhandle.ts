import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUsersMeSubscriptionsSubscriptionHandlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionHandle" })
  subscriptionHandle: string;
}


export class DeleteUsersMeSubscriptionsSubscriptionHandleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteUsersMeSubscriptionsSubscriptionHandleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersMeSubscriptionsSubscriptionHandlePathParams;

  @SpeakeasyMetadata()
  security: DeleteUsersMeSubscriptionsSubscriptionHandleSecurity;
}


export class DeleteUsersMeSubscriptionsSubscriptionHandleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
