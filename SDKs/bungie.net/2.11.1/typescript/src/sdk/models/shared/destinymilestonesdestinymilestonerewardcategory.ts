import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneRewardEntry } from "./destinymilestonesdestinymilestonerewardentry";



// DestinyMilestonesDestinyMilestoneRewardCategory
/** 
 * Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
**/
export class DestinyMilestonesDestinyMilestoneRewardCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneRewardEntry })
  entries?: DestinyMilestonesDestinyMilestoneRewardEntry[];

  @SpeakeasyMetadata()
  rewardCategoryHash?: number;
}
