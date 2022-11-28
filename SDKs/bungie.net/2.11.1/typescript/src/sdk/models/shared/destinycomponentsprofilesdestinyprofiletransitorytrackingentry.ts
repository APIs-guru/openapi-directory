import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry
/** 
 * This represents a single "thing" being tracked by the player.
 * This can point to many types of entities, but only a subset of them will actually have a valid hash identifier for whatever it is being pointed to.
 * It's up to you to interpret what it means when various combinations of these entries have values being tracked.
**/
export class DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  itemHash?: number;

  @SpeakeasyMetadata()
  locationHash?: number;

  @SpeakeasyMetadata()
  objectiveHash?: number;

  @SpeakeasyMetadata()
  questlineItemHash?: number;

  @SpeakeasyMetadata()
  trackedDate?: Date;
}
