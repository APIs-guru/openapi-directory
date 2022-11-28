import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CloudPubsubTopicPayloadFormatEnum {
    PayloadFormatUnspecified = "PAYLOAD_FORMAT_UNSPECIFIED",
    Json = "JSON"
}
/**
 * A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
**/
export declare class CloudPubsubTopic extends SpeakeasyBase {
    payloadFormat?: CloudPubsubTopicPayloadFormatEnum;
    topicName?: string;
}
