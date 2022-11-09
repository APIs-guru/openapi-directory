import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignConfig } from "./campaignconfig";
import { CampaignUpdateSummary } from "./campaignupdatesummary";
/**
 * Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
**/
export declare class Campaign extends SpeakeasyBase {
    campaignArn?: string;
    campaignConfig?: CampaignConfig;
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    latestCampaignUpdate?: CampaignUpdateSummary;
    minProvisionedTps?: number;
    name?: string;
    solutionVersionArn?: string;
    status?: string;
}
