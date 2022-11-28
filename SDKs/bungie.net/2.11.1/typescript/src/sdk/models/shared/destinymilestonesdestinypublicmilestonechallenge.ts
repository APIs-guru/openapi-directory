import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyMilestonesDestinyPublicMilestoneChallenge
/** 
 * A Milestone can have many Challenges. Challenges are just extra Objectives that provide a fun way to mix-up play and provide extra rewards.
**/
export class DestinyMilestonesDestinyPublicMilestoneChallenge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  objectiveHash?: number;
}
