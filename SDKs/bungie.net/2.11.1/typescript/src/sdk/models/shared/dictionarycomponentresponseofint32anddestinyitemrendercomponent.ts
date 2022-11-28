import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemRenderComponent } from "./destinyentitiesitemsdestinyitemrendercomponent";



export class DictionaryComponentResponseOfint32AndDestinyItemRenderComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemRenderComponent })
  data?: Map<string, DestinyEntitiesItemsDestinyItemRenderComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
