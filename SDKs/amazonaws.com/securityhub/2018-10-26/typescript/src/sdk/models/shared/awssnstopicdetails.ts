import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsSnsTopicSubscription } from "./awssnstopicsubscription";


// AwsSnsTopicDetails
/** 
 * A wrapper type for the topic's ARN.
**/
export class AwsSnsTopicDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=Subscription", elemType: shared.AwsSnsTopicSubscription })
  subscription?: AwsSnsTopicSubscription[];

  @Metadata({ data: "json, name=TopicName" })
  topicName?: string;
}
