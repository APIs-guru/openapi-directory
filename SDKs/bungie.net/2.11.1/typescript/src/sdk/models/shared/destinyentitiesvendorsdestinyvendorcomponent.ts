import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";



// DestinyEntitiesVendorsDestinyVendorComponentProgression
/** 
 * If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
**/
export class DestinyEntitiesVendorsDestinyVendorComponentProgression extends SpeakeasyBase {
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


// DestinyEntitiesVendorsDestinyVendorComponent
/** 
 * This component contains essential/summary information about the vendor.
**/
export class DestinyEntitiesVendorsDestinyVendorComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canPurchase?: boolean;

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  nextRefreshDate?: Date;

  @SpeakeasyMetadata()
  progression?: DestinyEntitiesVendorsDestinyVendorComponentProgression;

  @SpeakeasyMetadata()
  seasonalRank?: number;

  @SpeakeasyMetadata()
  vendorHash?: number;

  @SpeakeasyMetadata()
  vendorLocationIndex?: number;
}
