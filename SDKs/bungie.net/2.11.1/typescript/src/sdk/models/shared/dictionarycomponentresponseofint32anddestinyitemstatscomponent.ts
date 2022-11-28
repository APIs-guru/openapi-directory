import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemStatsComponent } from "./destinyentitiesitemsdestinyitemstatscomponent";



export class DictionaryComponentResponseOfint32AndDestinyItemStatsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemStatsComponent })
  data?: Map<string, DestinyEntitiesItemsDestinyItemStatsComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
