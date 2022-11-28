import { SpeakeasyBase } from "../../../internal/utils";
import { TargetRoleEnum } from "./targetroleenum";
import { TargetHealth } from "./targethealth";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
**/
export declare class DbProxyTarget extends SpeakeasyBase {
    endpoint?: string;
    port?: number;
    rdsResourceId?: string;
    role?: TargetRoleEnum;
    targetArn?: string;
    targetHealth?: TargetHealth;
    trackedClusterId?: string;
    type?: TargetTypeEnum;
}
