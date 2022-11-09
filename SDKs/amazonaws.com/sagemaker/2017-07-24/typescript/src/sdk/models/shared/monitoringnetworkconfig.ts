import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfig } from "./vpcconfig";


// MonitoringNetworkConfig
/** 
 * The networking configuration for the monitoring job.
**/
export class MonitoringNetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @Metadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
