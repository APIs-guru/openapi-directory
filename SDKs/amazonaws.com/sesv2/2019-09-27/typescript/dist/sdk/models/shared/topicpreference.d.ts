import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
/**
 * The contact's preference for being opted-in to or opted-out of a topic.
**/
export declare class TopicPreference extends SpeakeasyBase {
    subscriptionStatus: SubscriptionStatusEnum;
    topicName: string;
}
