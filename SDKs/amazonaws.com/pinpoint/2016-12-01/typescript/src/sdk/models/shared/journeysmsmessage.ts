import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";



// JourneySmsMessage
/** 
 * Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
**/
export class JourneySmsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=MessageType" })
  messageType?: MessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OriginationNumber" })
  originationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SenderId" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
