import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneActivityPhase } from "./destinymilestonesdestinymilestoneactivityphase";
/**
 * An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
**/
export declare class DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus extends SpeakeasyBase {
    completed?: boolean;
    phases?: DestinyMilestonesDestinyMilestoneActivityPhase[];
}
/**
 * Represents custom data that we know about an individual variant of an activity.
**/
export declare class DestinyMilestonesDestinyMilestoneActivityVariant extends SpeakeasyBase {
    activityHash?: number;
    activityModeHash?: number;
    activityModeType?: number;
    completionStatus?: DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus;
}
