import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";


// CreateCampaignRequest
/** 
 * This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
**/
export class CreateCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignCriterion" })
  campaignCriterion?: CampaignCriterion;

  @Metadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=fundingStrategy" })
  fundingStrategy?: FundingStrategy;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
