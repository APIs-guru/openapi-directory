import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityResponse } from "./activityresponse";
/**
 * Provides information about the activities that were performed by a campaign.
**/
export declare class ActivitiesResponse extends SpeakeasyBase {
    item: ActivityResponse[];
    nextToken?: string;
}
