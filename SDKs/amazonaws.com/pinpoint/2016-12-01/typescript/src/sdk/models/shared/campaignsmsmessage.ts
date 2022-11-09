import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageTypeEnum } from "./messagetypeenum";


// CampaignSmsMessage
/** 
 * Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
**/
export class CampaignSmsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

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
