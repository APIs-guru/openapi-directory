import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignStatusEnum } from "./campaignstatusenum";



// CampaignState
/** 
 * Provides information about the status of a campaign.
**/
export class CampaignState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignStatus" })
  campaignStatus?: CampaignStatusEnum;
}
