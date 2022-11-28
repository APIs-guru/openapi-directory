import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSnsTopicSubscription } from "./awssnstopicsubscription";
/**
 * A wrapper type for the topic's ARN.
**/
export declare class AwsSnsTopicDetails extends SpeakeasyBase {
    kmsMasterKeyId?: string;
    owner?: string;
    subscription?: AwsSnsTopicSubscription[];
    topicName?: string;
}
