import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignCustomMessage
/** 
 * Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
**/
export class CampaignCustomMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data?: string;
}
