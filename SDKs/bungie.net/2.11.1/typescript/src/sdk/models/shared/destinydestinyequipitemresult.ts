import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyDestinyEquipItemResult
/** 
 * The results of an Equipping operation performed through the Destiny API.
**/
export class DestinyDestinyEquipItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  equipStatus?: number;

  @SpeakeasyMetadata()
  itemInstanceId?: number;
}
