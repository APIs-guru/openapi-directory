import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";



// SmsMessage
/** 
 * Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
**/
export class SmsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=Keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=MessageType" })
  messageType?: MessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OriginationNumber" })
  originationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SenderId" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
