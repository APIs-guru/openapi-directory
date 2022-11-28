import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterConditionEnum } from "./inventoryfilterconditionenum";



// InventoryFilter
/** 
 * An inventory filter.
**/
export class InventoryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition: InventoryFilterConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
