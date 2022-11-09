import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignStatusEnum } from "./campaignstatusenum";


// CampaignState
/** 
 * Provides information about the status of a campaign.
**/
export class CampaignState extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignStatus" })
  campaignStatus?: CampaignStatusEnum;
}
