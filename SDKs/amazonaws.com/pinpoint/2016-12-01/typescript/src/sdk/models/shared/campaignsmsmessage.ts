import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";



// CampaignSmsMessage
/** 
 * Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
**/
export class CampaignSmsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

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
