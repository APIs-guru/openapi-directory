import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignConfig } from "./campaignconfig";
/**
 * Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.
**/
export declare class CampaignUpdateSummary extends SpeakeasyBase {
    campaignConfig?: CampaignConfig;
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    minProvisionedTps?: number;
    solutionVersionArn?: string;
    status?: string;
}
