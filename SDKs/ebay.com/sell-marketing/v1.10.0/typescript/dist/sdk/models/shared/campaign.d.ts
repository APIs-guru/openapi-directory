import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignCriterion } from "./campaigncriterion";
import { FundingStrategy } from "./fundingstrategy";
/**
 * This type defines the fields that describe an ad campaign.
**/
export declare class Campaign extends SpeakeasyBase {
    campaignCriterion?: CampaignCriterion;
    campaignId?: string;
    campaignName?: string;
    campaignStatus?: string;
    endDate?: string;
    fundingStrategy?: FundingStrategy;
    marketplaceId?: string;
    startDate?: string;
}
