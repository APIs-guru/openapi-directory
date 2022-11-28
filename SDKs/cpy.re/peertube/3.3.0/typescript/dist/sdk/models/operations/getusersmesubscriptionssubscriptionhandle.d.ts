import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeSubscriptionsSubscriptionHandlePathParams extends SpeakeasyBase {
    subscriptionHandle: string;
}
export declare class GetUsersMeSubscriptionsSubscriptionHandleSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeSubscriptionsSubscriptionHandleRequest extends SpeakeasyBase {
    pathParams: GetUsersMeSubscriptionsSubscriptionHandlePathParams;
    security: GetUsersMeSubscriptionsSubscriptionHandleSecurity;
}
export declare class GetUsersMeSubscriptionsSubscriptionHandleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoChannel?: any;
}
