import { SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroup } from "./dbparametergroup";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.
**/
export declare class DbParameterGroupsMessage extends SpeakeasyBase {
    dbParameterGroups?: DbParameterGroup[];
    marker?: string;
}
