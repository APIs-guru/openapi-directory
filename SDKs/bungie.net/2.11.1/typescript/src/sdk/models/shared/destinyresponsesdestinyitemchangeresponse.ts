import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
import { DestinyResponsesDestinyItemResponse } from "./destinyresponsesdestinyitemresponse";



export class DestinyResponsesDestinyItemChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemComponent })
  addedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[];

  @SpeakeasyMetadata()
  item?: DestinyResponsesDestinyItemResponse;

  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemComponent })
  removedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[];
}
