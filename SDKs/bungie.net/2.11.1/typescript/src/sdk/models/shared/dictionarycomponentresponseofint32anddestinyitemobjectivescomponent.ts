import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemObjectivesComponent } from "./destinyentitiesitemsdestinyitemobjectivescomponent";



export class DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemObjectivesComponent })
  data?: Map<string, DestinyEntitiesItemsDestinyItemObjectivesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
