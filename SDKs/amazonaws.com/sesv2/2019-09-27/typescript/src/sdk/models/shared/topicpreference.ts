import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";


// TopicPreference
/** 
 * The contact's preference for being opted-in to or opted-out of a topic.
**/
export class TopicPreference extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubscriptionStatus" })
  subscriptionStatus: SubscriptionStatusEnum;

  @Metadata({ data: "json, name=TopicName" })
  topicName: string;
}
