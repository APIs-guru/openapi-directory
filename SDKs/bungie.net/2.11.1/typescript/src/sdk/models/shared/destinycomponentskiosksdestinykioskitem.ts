import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyComponentsKiosksDestinyKioskItemFlavorObjective
/** 
 * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
**/
export class DestinyComponentsKiosksDestinyKioskItemFlavorObjective extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  complete?: boolean;

  @SpeakeasyMetadata()
  completionValue?: number;

  @SpeakeasyMetadata()
  destinationHash?: number;

  @SpeakeasyMetadata()
  objectiveHash?: number;

  @SpeakeasyMetadata()
  progress?: number;

  @SpeakeasyMetadata()
  visible?: boolean;
}


export class DestinyComponentsKiosksDestinyKioskItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canAcquire?: boolean;

  @SpeakeasyMetadata()
  failureIndexes?: number[];

  @SpeakeasyMetadata()
  flavorObjective?: DestinyComponentsKiosksDestinyKioskItemFlavorObjective;

  @SpeakeasyMetadata()
  index?: number;
}
