import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This represents a single "thing" being tracked by the player.
 * This can point to many types of entities, but only a subset of them will actually have a valid hash identifier for whatever it is being pointed to.
 * It's up to you to interpret what it means when various combinations of these entries have values being tracked.
**/
export declare class DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry extends SpeakeasyBase {
    activityHash?: number;
    itemHash?: number;
    locationHash?: number;
    objectiveHash?: number;
    questlineItemHash?: number;
    trackedDate?: Date;
}
