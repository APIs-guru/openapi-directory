import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityGetThreadSubscriptionForAuthenticatedUserPathParams extends SpeakeasyBase {
    threadId: number;
}
export declare class ActivityGetThreadSubscriptionForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: ActivityGetThreadSubscriptionForAuthenticatedUserPathParams;
}
export declare class ActivityGetThreadSubscriptionForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    threadSubscription?: shared.ThreadSubscription;
}
