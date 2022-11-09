import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryQueryOperatorTypeEnum } from "./inventoryqueryoperatortypeenum";


// InventoryFilter
/** 
 * One or more filters. Use a filter to return a more specific list of results.
**/
export class InventoryFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Type" })
  type?: InventoryQueryOperatorTypeEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
