import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUsersMeSubscriptionsSubscriptionHandlePathParams extends SpeakeasyBase {
    subscriptionHandle: string;
}
export declare class DeleteUsersMeSubscriptionsSubscriptionHandleSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteUsersMeSubscriptionsSubscriptionHandleRequest extends SpeakeasyBase {
    pathParams: DeleteUsersMeSubscriptionsSubscriptionHandlePathParams;
    security: DeleteUsersMeSubscriptionsSubscriptionHandleSecurity;
}
export declare class DeleteUsersMeSubscriptionsSubscriptionHandleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
