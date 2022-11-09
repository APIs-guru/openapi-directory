import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";


// Campaign
/** 
 * This type defines the fields that describe an ad campaign.
**/
export class Campaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignCriterion" })
  campaignCriterion?: CampaignCriterion;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @Metadata({ data: "json, name=campaignStatus" })
  campaignStatus?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=fundingStrategy" })
  fundingStrategy?: FundingStrategy;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
