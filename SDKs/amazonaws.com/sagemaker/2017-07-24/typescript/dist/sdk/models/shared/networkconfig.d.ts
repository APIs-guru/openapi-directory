import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    enableInterContainerTrafficEncryption?: boolean;
    enableNetworkIsolation?: boolean;
    vpcConfig?: VpcConfig;
}
