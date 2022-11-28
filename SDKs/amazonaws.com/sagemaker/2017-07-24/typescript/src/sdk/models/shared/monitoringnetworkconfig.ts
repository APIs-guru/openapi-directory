import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";



// MonitoringNetworkConfig
/** 
 * The networking configuration for the monitoring job.
**/
export class MonitoringNetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
