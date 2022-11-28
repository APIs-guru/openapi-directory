import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
**/
export declare class DestinyDestinyProgression extends SpeakeasyBase {
    currentProgress?: number;
    currentResetCount?: number;
    dailyLimit?: number;
    dailyProgress?: number;
    level?: number;
    levelCap?: number;
    nextLevelAt?: number;
    progressToNextLevel?: number;
    progressionHash?: number;
    rewardItemStates?: number[];
    seasonResets?: DestinyDestinyProgressionResetEntry[];
    stepIndex?: number;
    weeklyLimit?: number;
    weeklyProgress?: number;
}
