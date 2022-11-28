import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Customer } from "./customer";
import { Range } from "./range";



// CustomerList
/** 
 * List of customers
**/
export class CustomerList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Customer })
  items: Customer[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
