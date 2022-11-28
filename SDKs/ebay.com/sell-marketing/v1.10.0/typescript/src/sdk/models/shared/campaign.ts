import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";



// Campaign
/** 
 * This type defines the fields that describe an ad campaign.
**/
export class Campaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignCriterion" })
  campaignCriterion?: CampaignCriterion;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignStatus" })
  campaignStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingStrategy" })
  fundingStrategy?: FundingStrategy;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
