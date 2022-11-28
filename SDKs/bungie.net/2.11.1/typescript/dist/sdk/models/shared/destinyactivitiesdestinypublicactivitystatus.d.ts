import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
/**
 * Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character's progress in it.
**/
export declare class DestinyActivitiesDestinyPublicActivityStatus extends SpeakeasyBase {
    challengeObjectiveHashes?: number[];
    modifierHashes?: number[];
    rewardTooltipItems?: DestinyDestinyItemQuantity[];
}
