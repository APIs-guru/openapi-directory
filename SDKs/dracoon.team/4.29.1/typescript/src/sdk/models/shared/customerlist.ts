import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Customer } from "./customer";
import { Range } from "./range";


// CustomerList
/** 
 * List of customers
**/
export class CustomerList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Customer })
  items: Customer[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
