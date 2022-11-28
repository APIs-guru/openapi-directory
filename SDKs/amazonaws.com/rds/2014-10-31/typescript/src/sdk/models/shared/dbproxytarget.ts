import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetRoleEnum } from "./targetroleenum";
import { TargetHealth } from "./targethealth";
import { TargetTypeEnum } from "./targettypeenum";



// DbProxyTarget
/** 
 * <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
**/
export class DbProxyTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  rdsResourceId?: string;

  @SpeakeasyMetadata()
  role?: TargetRoleEnum;

  @SpeakeasyMetadata()
  targetArn?: string;

  @SpeakeasyMetadata()
  targetHealth?: TargetHealth;

  @SpeakeasyMetadata()
  trackedClusterId?: string;

  @SpeakeasyMetadata()
  type?: TargetTypeEnum;
}
