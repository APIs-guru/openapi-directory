import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";



// DestinyProgressionDestinyFactionProgression
/** 
 * Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
**/
export class DestinyProgressionDestinyFactionProgression extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentProgress?: number;

  @SpeakeasyMetadata()
  currentResetCount?: number;

  @SpeakeasyMetadata()
  dailyLimit?: number;

  @SpeakeasyMetadata()
  dailyProgress?: number;

  @SpeakeasyMetadata()
  factionHash?: number;

  @SpeakeasyMetadata()
  factionVendorIndex?: number;

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
