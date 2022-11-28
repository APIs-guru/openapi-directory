import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackConfig } from "./autorollbackconfig";
import { BlueGreenUpdatePolicy } from "./bluegreenupdatepolicy";
/**
 * Currently, the <code>DeploymentConfig</code> API is not supported.
**/
export declare class DeploymentConfig extends SpeakeasyBase {
    autoRollbackConfiguration?: AutoRollbackConfig;
    blueGreenUpdatePolicy: BlueGreenUpdatePolicy;
}
