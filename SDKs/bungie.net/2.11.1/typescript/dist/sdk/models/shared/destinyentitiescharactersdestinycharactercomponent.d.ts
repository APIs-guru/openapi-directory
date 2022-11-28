import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
/**
 * A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
**/
export declare class DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor extends SpeakeasyBase {
    alpha?: string;
    blue?: string;
    green?: string;
    red?: string;
}
/**
 * The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
**/
export declare class DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression extends SpeakeasyBase {
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
/**
 * This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
**/
export declare class DestinyEntitiesCharactersDestinyCharacterComponent extends SpeakeasyBase {
    baseCharacterLevel?: number;
    characterId?: number;
    classHash?: number;
    classType?: number;
    dateLastPlayed?: Date;
    emblemBackgroundPath?: string;
    emblemColor?: DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor;
    emblemHash?: number;
    emblemPath?: string;
    genderHash?: number;
    genderType?: number;
    levelProgression?: DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression;
    light?: number;
    membershipId?: number;
    membershipType?: number;
    minutesPlayedThisSession?: number;
    minutesPlayedTotal?: number;
    percentToNextLevel?: number;
    raceHash?: number;
    raceType?: number;
    stats?: Map<string, number>;
    titleRecordHash?: number;
}
