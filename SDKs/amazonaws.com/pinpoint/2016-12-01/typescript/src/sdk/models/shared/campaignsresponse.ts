import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignResponse } from "./campaignresponse";



// CampaignsResponse
/** 
 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
**/
export class CampaignsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: CampaignResponse })
  item: CampaignResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
