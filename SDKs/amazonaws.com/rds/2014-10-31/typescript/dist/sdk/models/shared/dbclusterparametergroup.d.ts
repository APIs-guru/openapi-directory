import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p>
**/
export declare class DbClusterParameterGroup extends SpeakeasyBase {
    dbClusterParameterGroupArn?: string;
    dbClusterParameterGroupName?: string;
    dbParameterGroupFamily?: string;
    description?: string;
}
