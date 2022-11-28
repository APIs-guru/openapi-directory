import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.
**/
export declare class DbParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: Parameter[];
}
