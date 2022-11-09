import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterprisesSendTestPushNotificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
