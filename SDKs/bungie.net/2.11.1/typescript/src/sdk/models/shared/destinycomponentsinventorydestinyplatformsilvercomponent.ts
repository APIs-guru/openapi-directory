import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";



export class DestinyComponentsInventoryDestinyPlatformSilverComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemComponent })
  platformSilver?: Map<string, DestinyEntitiesItemsDestinyItemComponent>;
}
