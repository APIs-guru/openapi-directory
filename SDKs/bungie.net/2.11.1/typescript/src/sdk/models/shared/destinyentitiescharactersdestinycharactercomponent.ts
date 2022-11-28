import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";



// DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
/** 
 * A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
**/
export class DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alpha?: string;

  @SpeakeasyMetadata()
  blue?: string;

  @SpeakeasyMetadata()
  green?: string;

  @SpeakeasyMetadata()
  red?: string;
}


// DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
/** 
 * The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
**/
export class DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentProgress?: number;

  @SpeakeasyMetadata()
  currentResetCount?: number;

  @SpeakeasyMetadata()
  dailyLimit?: number;

  @SpeakeasyMetadata()
  dailyProgress?: number;

  @SpeakeasyMetadata()
  level?: number;

  @SpeakeasyMetadata()
  levelCap?: number;

  @SpeakeasyMetadata()
  nextLevelAt?: number;

  @SpeakeasyMetadata()
  progressToNextLevel?: number;

  @SpeakeasyMetadata()
  progressionHash?: number;

  @SpeakeasyMetadata()
  rewardItemStates?: number[];

  @SpeakeasyMetadata({ elemType: DestinyDestinyProgressionResetEntry })
  seasonResets?: DestinyDestinyProgressionResetEntry[];

  @SpeakeasyMetadata()
  stepIndex?: number;

  @SpeakeasyMetadata()
  weeklyLimit?: number;

  @SpeakeasyMetadata()
  weeklyProgress?: number;
}


// DestinyEntitiesCharactersDestinyCharacterComponent
/** 
 * This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
**/
export class DestinyEntitiesCharactersDestinyCharacterComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseCharacterLevel?: number;

  @SpeakeasyMetadata()
  characterId?: number;

  @SpeakeasyMetadata()
  classHash?: number;

  @SpeakeasyMetadata()
  classType?: number;

  @SpeakeasyMetadata()
  dateLastPlayed?: Date;

  @SpeakeasyMetadata()
  emblemBackgroundPath?: string;

  @SpeakeasyMetadata()
  emblemColor?: DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor;

  @SpeakeasyMetadata()
  emblemHash?: number;

  @SpeakeasyMetadata()
  emblemPath?: string;

  @SpeakeasyMetadata()
  genderHash?: number;

  @SpeakeasyMetadata()
  genderType?: number;

  @SpeakeasyMetadata()
  levelProgression?: DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression;

  @SpeakeasyMetadata()
  light?: number;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  minutesPlayedThisSession?: number;

  @SpeakeasyMetadata()
  minutesPlayedTotal?: number;

  @SpeakeasyMetadata()
  percentToNextLevel?: number;

  @SpeakeasyMetadata()
  raceHash?: number;

  @SpeakeasyMetadata()
  raceType?: number;

  @SpeakeasyMetadata()
  stats?: Map<string, number>;

  @SpeakeasyMetadata()
  titleRecordHash?: number;
}
