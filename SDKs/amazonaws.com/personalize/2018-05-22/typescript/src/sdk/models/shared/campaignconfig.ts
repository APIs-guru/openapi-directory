import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignConfig
/** 
 * The configuration details of a campaign.
**/
export class CampaignConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemExplorationConfig" })
  itemExplorationConfig?: Map<string, string>;
}
