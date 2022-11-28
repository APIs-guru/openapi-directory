import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyActivity } from "./destinydestinyactivity";



// DestinyEntitiesCharactersDestinyCharacterActivitiesComponent
/** 
 * This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
**/
export class DestinyEntitiesCharactersDestinyCharacterActivitiesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyDestinyActivity })
  availableActivities?: DestinyDestinyActivity[];

  @SpeakeasyMetadata()
  currentActivityHash?: number;

  @SpeakeasyMetadata()
  currentActivityModeHash?: number;

  @SpeakeasyMetadata()
  currentActivityModeHashes?: number[];

  @SpeakeasyMetadata()
  currentActivityModeType?: number;

  @SpeakeasyMetadata()
  currentActivityModeTypes?: number[];

  @SpeakeasyMetadata()
  currentPlaylistActivityHash?: number;

  @SpeakeasyMetadata()
  dateActivityStarted?: Date;

  @SpeakeasyMetadata()
  lastCompletedStoryHash?: number;
}
