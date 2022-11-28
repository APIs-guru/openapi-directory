import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstance } from "./dbinstance";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.
**/
export declare class DbInstanceMessage extends SpeakeasyBase {
    dbInstances?: DbInstance[];
    marker?: string;
}
