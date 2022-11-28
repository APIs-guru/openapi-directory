import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityDeleteThreadSubscriptionPathParams extends SpeakeasyBase {
    threadId: number;
}
export declare class ActivityDeleteThreadSubscriptionRequest extends SpeakeasyBase {
    pathParams: ActivityDeleteThreadSubscriptionPathParams;
}
export declare class ActivityDeleteThreadSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
