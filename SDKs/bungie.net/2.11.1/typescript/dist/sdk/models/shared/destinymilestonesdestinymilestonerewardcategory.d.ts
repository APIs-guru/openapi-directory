import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneRewardEntry } from "./destinymilestonesdestinymilestonerewardentry";
/**
 * Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
**/
export declare class DestinyMilestonesDestinyMilestoneRewardCategory extends SpeakeasyBase {
    entries?: DestinyMilestonesDestinyMilestoneRewardEntry[];
    rewardCategoryHash?: number;
}
