import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CloudPubsubTopicPayloadFormatEnum {
    PayloadFormatUnspecified = "PAYLOAD_FORMAT_UNSPECIFIED",
    Json = "JSON"
}


// CloudPubsubTopic
/** 
 * A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
**/
export class CloudPubsubTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloadFormat" })
  payloadFormat?: CloudPubsubTopicPayloadFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
