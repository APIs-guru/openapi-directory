import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CloudPubsubTopicPayloadFormatEnum {
    PayloadFormatUnspecified = "PAYLOAD_FORMAT_UNSPECIFIED"
,    Json = "JSON"
}


// CloudPubsubTopic
/** 
 * A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
**/
export class CloudPubsubTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloadFormat" })
  payloadFormat?: CloudPubsubTopicPayloadFormatEnum;

  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
