import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemPerksComponent } from "./destinyentitiesitemsdestinyitemperkscomponent";



export class DictionaryComponentResponseOfint32AndDestinyItemPerksComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemPerksComponent })
  data?: Map<string, DestinyEntitiesItemsDestinyItemPerksComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
