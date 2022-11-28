import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
import { DestinyResponsesDestinyItemResponse } from "./destinyresponsesdestinyitemresponse";
export declare class DestinyResponsesDestinyItemChangeResponse extends SpeakeasyBase {
    addedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[];
    item?: DestinyResponsesDestinyItemResponse;
    removedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[];
}
