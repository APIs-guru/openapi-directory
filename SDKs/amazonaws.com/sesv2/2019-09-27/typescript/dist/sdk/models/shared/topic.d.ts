import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
/**
 * An interest group, theme, or label within a list. Lists can have multiple topics.
**/
export declare class Topic extends SpeakeasyBase {
    defaultSubscriptionStatus: SubscriptionStatusEnum;
    description?: string;
    displayName: string;
    topicName: string;
}
