import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsItemsDestinyItemPlugComponent } from "./destinycomponentsitemsdestinyitemplugcomponent";



export class DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsItemsDestinyItemPlugComponent })
  data?: Map<string, DestinyComponentsItemsDestinyItemPlugComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}
