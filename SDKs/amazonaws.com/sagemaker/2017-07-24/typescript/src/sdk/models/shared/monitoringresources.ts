import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringClusterConfig } from "./monitoringclusterconfig";



// MonitoringResources
/** 
 * Identifies the resources to deploy for a monitoring job.
**/
export class MonitoringResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterConfig" })
  clusterConfig: MonitoringClusterConfig;
}
