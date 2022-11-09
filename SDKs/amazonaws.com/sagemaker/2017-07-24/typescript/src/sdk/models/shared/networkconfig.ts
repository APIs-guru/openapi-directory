import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfig } from "./vpcconfig";


// NetworkConfig
/** 
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @Metadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
