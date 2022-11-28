import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyActivity } from "./destinydestinyactivity";
/**
 * This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
**/
export declare class DestinyEntitiesCharactersDestinyCharacterActivitiesComponent extends SpeakeasyBase {
    availableActivities?: DestinyDestinyActivity[];
    currentActivityHash?: number;
    currentActivityModeHash?: number;
    currentActivityModeHashes?: number[];
    currentActivityModeType?: number;
    currentActivityModeTypes?: number[];
    currentPlaylistActivityHash?: number;
    dateActivityStarted?: Date;
    lastCompletedStoryHash?: number;
}
