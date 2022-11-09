import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";


// Topic
/** 
 * An interest group, theme, or label within a list. Lists can have multiple topics.
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultSubscriptionStatus" })
  defaultSubscriptionStatus: SubscriptionStatusEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName: string;

  @Metadata({ data: "json, name=TopicName" })
  topicName: string;
}
