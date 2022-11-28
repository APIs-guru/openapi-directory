import { SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.
**/
export declare class DbSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroups?: DbSubnetGroup[];
    marker?: string;
}
