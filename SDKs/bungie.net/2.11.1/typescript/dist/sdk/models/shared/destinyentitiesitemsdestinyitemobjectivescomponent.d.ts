import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
/**
 * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
**/
export declare class DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective extends SpeakeasyBase {
    activityHash?: number;
    complete?: boolean;
    completionValue?: number;
    destinationHash?: number;
    objectiveHash?: number;
    progress?: number;
    visible?: boolean;
}
/**
 * Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
**/
export declare class DestinyEntitiesItemsDestinyItemObjectivesComponent extends SpeakeasyBase {
    dateCompleted?: Date;
    flavorObjective?: DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective;
    objectives?: DestinyQuestsDestinyObjectiveProgress[];
}
