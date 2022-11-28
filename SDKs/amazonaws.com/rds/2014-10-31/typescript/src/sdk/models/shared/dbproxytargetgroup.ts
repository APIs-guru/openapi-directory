import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionPoolConfigurationInfo } from "./connectionpoolconfigurationinfo";



// DbProxyTargetGroup
/** 
 * <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
**/
export class DbProxyTargetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionPoolConfig?: ConnectionPoolConfigurationInfo;

  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  dbProxyName?: string;

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  targetGroupArn?: string;

  @SpeakeasyMetadata()
  targetGroupName?: string;

  @SpeakeasyMetadata()
  updatedDate?: Date;
}
