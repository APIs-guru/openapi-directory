import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionPoolConfigurationInfo } from "./connectionpoolconfigurationinfo";
/**
 * <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
**/
export declare class DbProxyTargetGroup extends SpeakeasyBase {
    connectionPoolConfig?: ConnectionPoolConfigurationInfo;
    createdDate?: Date;
    dbProxyName?: string;
    isDefault?: boolean;
    status?: string;
    targetGroupArn?: string;
    targetGroupName?: string;
    updatedDate?: Date;
}
