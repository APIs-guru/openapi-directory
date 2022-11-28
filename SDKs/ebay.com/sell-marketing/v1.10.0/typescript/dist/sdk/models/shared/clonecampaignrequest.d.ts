import { SpeakeasyBase } from "../../../internal/utils";
import { FundingStrategy } from "./fundingstrategy";
/**
 * This type defines the fields needed for a clone-campaign request.
**/
export declare class CloneCampaignRequest extends SpeakeasyBase {
    campaignName?: string;
    endDate?: string;
    fundingStrategy?: FundingStrategy;
    startDate?: string;
}
