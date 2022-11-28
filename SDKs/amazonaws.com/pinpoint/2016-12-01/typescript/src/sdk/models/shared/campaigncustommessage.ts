import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignCustomMessage
/** 
 * Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
**/
export class CampaignCustomMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: string;
}
