import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitySetThreadSubscriptionPathParams extends SpeakeasyBase {
    threadId: number;
}
export declare class ActivitySetThreadSubscriptionRequestBody extends SpeakeasyBase {
    ignored?: boolean;
}
export declare class ActivitySetThreadSubscriptionRequest extends SpeakeasyBase {
    pathParams: ActivitySetThreadSubscriptionPathParams;
    request?: ActivitySetThreadSubscriptionRequestBody;
}
export declare class ActivitySetThreadSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    threadSubscription?: shared.ThreadSubscription;
}
