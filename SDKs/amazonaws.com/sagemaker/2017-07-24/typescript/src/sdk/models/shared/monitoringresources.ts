import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringClusterConfig } from "./monitoringclusterconfig";


// MonitoringResources
/** 
 * Identifies the resources to deploy for a monitoring job.
**/
export class MonitoringResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterConfig" })
  clusterConfig: MonitoringClusterConfig;
}
