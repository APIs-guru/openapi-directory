import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyEquipItemResult } from "./destinydestinyequipitemresult";



// DestinyDestinyEquipItemResults
/** 
 * The results of a bulk Equipping operation performed through the Destiny API.
**/
export class DestinyDestinyEquipItemResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyDestinyEquipItemResult })
  equipResults?: DestinyDestinyEquipItemResult[];
}
