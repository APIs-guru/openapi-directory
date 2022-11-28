import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyPerksDestinyPerkReference
/** 
 * The list of perks to display in an item tooltip - and whether or not they have been activated.
 * Perks apply a variety of effects to a character, and are generally either intrinsic to the item or provided in activated talent nodes or sockets.
**/
export class DestinyPerksDestinyPerkReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iconPath?: string;

  @SpeakeasyMetadata()
  isActive?: boolean;

  @SpeakeasyMetadata()
  perkHash?: number;

  @SpeakeasyMetadata()
  visible?: boolean;
}
