import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCurrentSubscriptionPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class GetCurrentSubscriptionQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetCurrentSubscriptionSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetCurrentSubscriptionRequest extends SpeakeasyBase {
    pathParams: GetCurrentSubscriptionPathParams;
    queryParams: GetCurrentSubscriptionQueryParams;
    security: GetCurrentSubscriptionSecurity;
}
export declare class GetCurrentSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    itvCurrentSubscription?: shared.ItvCurrentSubscription;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
