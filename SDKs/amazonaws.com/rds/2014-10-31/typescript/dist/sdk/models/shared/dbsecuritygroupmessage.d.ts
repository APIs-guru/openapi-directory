import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroup } from "./dbsecuritygroup";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.
**/
export declare class DbSecurityGroupMessage extends SpeakeasyBase {
    dbSecurityGroups?: DbSecurityGroup[];
    marker?: string;
}
