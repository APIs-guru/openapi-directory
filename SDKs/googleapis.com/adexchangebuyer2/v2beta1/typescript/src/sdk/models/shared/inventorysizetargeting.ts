import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";



// InventorySizeTargeting
/** 
 * Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
**/
export class InventorySizeTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedInventorySizes", elemType: AdSize })
  excludedInventorySizes?: AdSize[];

  @SpeakeasyMetadata({ data: "json, name=targetedInventorySizes", elemType: AdSize })
  targetedInventorySizes?: AdSize[];
}
