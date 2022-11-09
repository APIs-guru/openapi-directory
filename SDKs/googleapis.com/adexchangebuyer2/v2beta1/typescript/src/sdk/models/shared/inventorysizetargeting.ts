import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdSize } from "./adsize";
import { AdSize } from "./adsize";


// InventorySizeTargeting
/** 
 * Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
**/
export class InventorySizeTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedInventorySizes", elemType: shared.AdSize })
  excludedInventorySizes?: AdSize[];

  @Metadata({ data: "json, name=targetedInventorySizes", elemType: shared.AdSize })
  targetedInventorySizes?: AdSize[];
}
