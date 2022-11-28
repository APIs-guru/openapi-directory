import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDyeReference } from "./destinydyereference";
/**
 * Bare minimum summary information for an item, for the sake of 3D rendering the item.
**/
export declare class DestinyCharacterDestinyItemPeerView extends SpeakeasyBase {
    dyes?: DestinyDyeReference[];
    itemHash?: number;
}
