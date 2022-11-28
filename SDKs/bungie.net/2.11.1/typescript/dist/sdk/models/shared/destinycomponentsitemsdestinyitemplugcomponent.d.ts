import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
/**
 * Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.
 * This component finds all items that are considered "Plugs" in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.
**/
export declare class DestinyComponentsItemsDestinyItemPlugComponent extends SpeakeasyBase {
    canInsert?: boolean;
    enableFailIndexes?: number[];
    enabled?: boolean;
    insertFailIndexes?: number[];
    plugItemHash?: number;
    plugObjectives?: DestinyQuestsDestinyObjectiveProgress[];
}
