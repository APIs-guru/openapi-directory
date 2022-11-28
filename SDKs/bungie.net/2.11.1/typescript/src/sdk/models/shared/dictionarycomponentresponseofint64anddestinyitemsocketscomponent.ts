import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemSocketsComponent } from "./destinyentitiesitemsdestinyitemsocketscomponent";



export class DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemSocketsComponent })
  data?: Map<string, DestinyEntitiesItemsDestinyItemSocketsComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
