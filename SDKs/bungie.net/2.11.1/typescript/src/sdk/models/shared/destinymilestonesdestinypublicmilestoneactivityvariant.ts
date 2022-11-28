import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyMilestonesDestinyPublicMilestoneActivityVariant
/** 
 * Represents a variant of an activity that's relevant to a milestone.
**/
export class DestinyMilestonesDestinyPublicMilestoneActivityVariant extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  activityModeHash?: number;

  @SpeakeasyMetadata()
  activityModeType?: number;
}
