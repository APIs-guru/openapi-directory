import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";



// DestinyDestinyProgression
/** 
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
**/
export class DestinyDestinyProgression extends SpeakeasyBase {
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
