import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";



// Topic
/** 
 * An interest group, theme, or label within a list. Lists can have multiple topics.
**/
export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultSubscriptionStatus" })
  defaultSubscriptionStatus: SubscriptionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=TopicName" })
  topicName: string;
}
