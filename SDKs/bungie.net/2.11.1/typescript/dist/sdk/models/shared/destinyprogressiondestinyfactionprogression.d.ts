import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
/**
 * Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
**/
export declare class DestinyProgressionDestinyFactionProgression extends SpeakeasyBase {
    currentProgress?: number;
    currentResetCount?: number;
    dailyLimit?: number;
    dailyProgress?: number;
    factionHash?: number;
    factionVendorIndex?: number;
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
