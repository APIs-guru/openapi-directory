import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterprisesSendTestPushNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
