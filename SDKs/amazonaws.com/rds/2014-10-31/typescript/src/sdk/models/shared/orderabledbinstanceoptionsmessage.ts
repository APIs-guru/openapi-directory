import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOption } from "./orderabledbinstanceoption";



// OrderableDbInstanceOptionsMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action. 
**/
export class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableDbInstanceOption })
  orderableDbInstanceOptions?: OrderableDbInstanceOption[];
}
