import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";
/**
 * This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
**/
export declare class CreateCampaignRequest extends SpeakeasyBase {
    campaignCriterion?: CampaignCriterion;
    campaignName?: string;
    endDate?: string;
    fundingStrategy?: FundingStrategy;
    marketplaceId?: string;
    startDate?: string;
}
