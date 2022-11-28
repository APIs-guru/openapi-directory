import { SpeakeasyBase } from "../../../internal/utils";
/**
 * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
**/
export declare class DestinyComponentsKiosksDestinyKioskItemFlavorObjective extends SpeakeasyBase {
    activityHash?: number;
    complete?: boolean;
    completionValue?: number;
    destinationHash?: number;
    objectiveHash?: number;
    progress?: number;
    visible?: boolean;
}
export declare class DestinyComponentsKiosksDestinyKioskItem extends SpeakeasyBase {
    canAcquire?: boolean;
    failureIndexes?: number[];
    flavorObjective?: DestinyComponentsKiosksDestinyKioskItemFlavorObjective;
    index?: number;
}
