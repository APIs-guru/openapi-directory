import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageTypeEnum } from "./messagetypeenum";


// JourneySmsMessage
/** 
 * Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
**/
export class JourneySmsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityId" })
  entityId?: string;

  @Metadata({ data: "json, name=MessageType" })
  messageType?: MessageTypeEnum;

  @Metadata({ data: "json, name=OriginationNumber" })
  originationNumber?: string;

  @Metadata({ data: "json, name=SenderId" })
  senderId?: string;

  @Metadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
