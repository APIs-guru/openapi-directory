import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyQuestsDestinyObjectiveProgress
/** 
 * Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
**/
export class DestinyQuestsDestinyObjectiveProgress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  complete?: boolean;

  @SpeakeasyMetadata()
  completionValue?: number;

  @SpeakeasyMetadata()
  destinationHash?: number;

  @SpeakeasyMetadata()
  objectiveHash?: number;

  @SpeakeasyMetadata()
  progress?: number;

  @SpeakeasyMetadata()
  visible?: boolean;
}
