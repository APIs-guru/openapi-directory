import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API.
**/
export declare class CampaignSummary extends SpeakeasyBase {
    campaignArn?: string;
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
