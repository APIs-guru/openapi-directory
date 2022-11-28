import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
**/
export declare class DbClusterParameterGroup extends SpeakeasyBase {
    dbClusterParameterGroupArn?: string;
    dbClusterParameterGroupName?: string;
    dbParameterGroupFamily?: string;
    description?: string;
}
