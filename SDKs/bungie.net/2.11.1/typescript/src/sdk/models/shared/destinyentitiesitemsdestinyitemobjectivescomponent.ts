import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



// DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
/** 
 * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
**/
export class DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective extends SpeakeasyBase {
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


// DestinyEntitiesItemsDestinyItemObjectivesComponent
/** 
 * Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
**/
export class DestinyEntitiesItemsDestinyItemObjectivesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dateCompleted?: Date;

  @SpeakeasyMetadata()
  flavorObjective?: DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  objectives?: DestinyQuestsDestinyObjectiveProgress[];
}
