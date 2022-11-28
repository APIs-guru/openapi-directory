import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what "reusable" plugs can be inserted, etc...)
 * If I had it to do over, this would probably have a DestinyItemPlug representing the inserted item instead of most of these properties. :shrug:
**/
export declare class DestinyEntitiesItemsDestinyItemSocketState extends SpeakeasyBase {
    enableFailIndexes?: number[];
    isEnabled?: boolean;
    isVisible?: boolean;
    plugHash?: number;
}
