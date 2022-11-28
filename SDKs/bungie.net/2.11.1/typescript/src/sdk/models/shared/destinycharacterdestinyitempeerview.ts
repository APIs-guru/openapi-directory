import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDyeReference } from "./destinydyereference";



// DestinyCharacterDestinyItemPeerView
/** 
 * Bare minimum summary information for an item, for the sake of 3D rendering the item.
**/
export class DestinyCharacterDestinyItemPeerView extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyDyeReference })
  dyes?: DestinyDyeReference[];

  @SpeakeasyMetadata()
  itemHash?: number;
}
