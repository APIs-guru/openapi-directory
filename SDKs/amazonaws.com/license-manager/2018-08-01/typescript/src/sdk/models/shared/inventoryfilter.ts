import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryFilterConditionEnum } from "./inventoryfilterconditionenum";


// InventoryFilter
/** 
 * An inventory filter.
**/
export class InventoryFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition: InventoryFilterConditionEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
