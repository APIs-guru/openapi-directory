import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignResponse } from "./campaignresponse";
/**
 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
**/
export declare class CampaignsResponse extends SpeakeasyBase {
    item: CampaignResponse[];
    nextToken?: string;
}
