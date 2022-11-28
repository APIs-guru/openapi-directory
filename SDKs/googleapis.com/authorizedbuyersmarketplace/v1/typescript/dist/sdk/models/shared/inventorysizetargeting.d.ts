import { SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";
/**
 * Represents the size of an ad unit that can be targeted on a bid request.
**/
export declare class InventorySizeTargeting extends SpeakeasyBase {
    excludedInventorySizes?: AdSize[];
    targetedInventorySizes?: AdSize[];
}
