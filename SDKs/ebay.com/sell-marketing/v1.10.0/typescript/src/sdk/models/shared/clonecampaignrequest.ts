import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FundingStrategy } from "./fundingstrategy";


// CloneCampaignRequest
/** 
 * This type defines the fields needed for a clone-campaign request.
**/
export class CloneCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=fundingStrategy" })
  fundingStrategy?: FundingStrategy;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
