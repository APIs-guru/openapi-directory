import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryQueryOperatorTypeEnum } from "./inventoryqueryoperatortypeenum";



// InventoryFilter
/** 
 * One or more filters. Use a filter to return a more specific list of results.
**/
export class InventoryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: InventoryQueryOperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
