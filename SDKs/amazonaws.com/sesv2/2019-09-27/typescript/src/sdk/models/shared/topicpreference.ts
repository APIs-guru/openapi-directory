import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";



// TopicPreference
/** 
 * The contact's preference for being opted-in to or opted-out of a topic.
**/
export class TopicPreference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubscriptionStatus" })
  subscriptionStatus: SubscriptionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TopicName" })
  topicName: string;
}
