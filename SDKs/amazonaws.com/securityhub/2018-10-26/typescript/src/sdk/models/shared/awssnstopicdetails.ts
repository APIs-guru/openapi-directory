import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSnsTopicSubscription } from "./awssnstopicsubscription";



// AwsSnsTopicDetails
/** 
 * A wrapper type for the topic's ARN.
**/
export class AwsSnsTopicDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=Subscription", elemType: AwsSnsTopicSubscription })
  subscription?: AwsSnsTopicSubscription[];

  @SpeakeasyMetadata({ data: "json, name=TopicName" })
  topicName?: string;
}
