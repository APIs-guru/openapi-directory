import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdSize } from "./adsize";
import { AdSize } from "./adsize";


// InventorySizeTargeting
/** 
 * Represents the size of an ad unit that can be targeted on a bid request.
**/
export class InventorySizeTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedInventorySizes", elemType: shared.AdSize })
  excludedInventorySizes?: AdSize[];

  @Metadata({ data: "json, name=targetedInventorySizes", elemType: shared.AdSize })
  targetedInventorySizes?: AdSize[];
}
