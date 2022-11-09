import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageTypeEnum } from "./messagetypeenum";


// SmsMessage
/** 
 * Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
**/
export class SmsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=EntityId" })
  entityId?: string;

  @Metadata({ data: "json, name=Keyword" })
  keyword?: string;

  @Metadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @Metadata({ data: "json, name=MessageType" })
  messageType?: MessageTypeEnum;

  @Metadata({ data: "json, name=OriginationNumber" })
  originationNumber?: string;

  @Metadata({ data: "json, name=SenderId" })
  senderId?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
