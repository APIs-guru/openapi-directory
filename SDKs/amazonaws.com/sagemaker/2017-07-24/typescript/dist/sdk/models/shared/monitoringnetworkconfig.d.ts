import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * The networking configuration for the monitoring job.
**/
export declare class MonitoringNetworkConfig extends SpeakeasyBase {
    enableInterContainerTrafficEncryption?: boolean;
    enableNetworkIsolation?: boolean;
    vpcConfig?: VpcConfig;
}
