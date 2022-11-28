import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneActivityPhase } from "./destinymilestonesdestinymilestoneactivityphase";



// DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
/** 
 * An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
**/
export class DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completed?: boolean;

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneActivityPhase })
  phases?: DestinyMilestonesDestinyMilestoneActivityPhase[];
}


// DestinyMilestonesDestinyMilestoneActivityVariant
/** 
 * Represents custom data that we know about an individual variant of an activity.
**/
export class DestinyMilestonesDestinyMilestoneActivityVariant extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  activityModeHash?: number;

  @SpeakeasyMetadata()
  activityModeType?: number;

  @SpeakeasyMetadata()
  completionStatus?: DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus;
}
