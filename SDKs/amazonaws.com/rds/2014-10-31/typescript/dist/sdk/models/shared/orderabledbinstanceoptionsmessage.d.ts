import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOption } from "./orderabledbinstanceoption";
/**
 *  Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.
**/
export declare class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableDbInstanceOptions?: OrderableDbInstanceOption[];
}
