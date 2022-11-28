import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";



// CreateCampaignRequest
/** 
 * This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
**/
export class CreateCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignCriterion" })
  campaignCriterion?: CampaignCriterion;

  @SpeakeasyMetadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingStrategy" })
  fundingStrategy?: FundingStrategy;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
