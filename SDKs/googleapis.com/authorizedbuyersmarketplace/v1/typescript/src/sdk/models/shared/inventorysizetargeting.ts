import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";



// InventorySizeTargeting
/** 
 * Represents the size of an ad unit that can be targeted on a bid request.
**/
export class InventorySizeTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedInventorySizes", elemType: AdSize })
  excludedInventorySizes?: AdSize[];

  @SpeakeasyMetadata({ data: "json, name=targetedInventorySizes", elemType: AdSize })
  targetedInventorySizes?: AdSize[];
}
