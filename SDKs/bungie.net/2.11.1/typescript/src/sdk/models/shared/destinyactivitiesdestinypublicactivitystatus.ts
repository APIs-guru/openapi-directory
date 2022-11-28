import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";



// DestinyActivitiesDestinyPublicActivityStatus
/** 
 * Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character's progress in it.
**/
export class DestinyActivitiesDestinyPublicActivityStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  challengeObjectiveHashes?: number[];

  @SpeakeasyMetadata()
  modifierHashes?: number[];

  @SpeakeasyMetadata({ elemType: DestinyDestinyItemQuantity })
  rewardTooltipItems?: DestinyDestinyItemQuantity[];
}
