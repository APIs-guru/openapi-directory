import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an activity that was performed by a campaign.
**/
export declare class ActivityResponse extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
    end?: string;
    id: string;
    result?: string;
    scheduledStart?: string;
    start?: string;
    state?: string;
    successfulEndpointCount?: number;
    timezonesCompletedCount?: number;
    timezonesTotalCount?: number;
    totalEndpointCount?: number;
    treatmentId?: string;
}
