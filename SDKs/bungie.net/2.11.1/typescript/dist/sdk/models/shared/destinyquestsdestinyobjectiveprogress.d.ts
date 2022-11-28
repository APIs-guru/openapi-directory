import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
**/
export declare class DestinyQuestsDestinyObjectiveProgress extends SpeakeasyBase {
    activityHash?: number;
    complete?: boolean;
    completionValue?: number;
    destinationHash?: number;
    objectiveHash?: number;
    progress?: number;
    visible?: boolean;
}
