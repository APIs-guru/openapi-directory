import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemInstanceComponent } from "./destinyentitiesitemsdestinyiteminstancecomponent";



export class DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemInstanceComponent })
  data?: Map<string, DestinyEntitiesItemsDestinyItemInstanceComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
