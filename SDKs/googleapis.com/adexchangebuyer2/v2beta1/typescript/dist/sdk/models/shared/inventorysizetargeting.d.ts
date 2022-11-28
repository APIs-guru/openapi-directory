import { SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";
/**
 * Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
**/
export declare class InventorySizeTargeting extends SpeakeasyBase {
    excludedInventorySizes?: AdSize[];
    targetedInventorySizes?: AdSize[];
}
