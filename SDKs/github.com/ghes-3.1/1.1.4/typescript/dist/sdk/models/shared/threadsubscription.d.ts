import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Thread Subscription
**/
export declare class ThreadSubscription extends SpeakeasyBase {
    createdAt: Date;
    ignored: boolean;
    reason: string;
    repositoryUrl?: string;
    subscribed: boolean;
    threadUrl?: string;
    url: string;
}
