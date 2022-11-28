import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingClusterConfig } from "./processingclusterconfig";



// ProcessingResources
/** 
 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
**/
export class ProcessingResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterConfig" })
  clusterConfig: ProcessingClusterConfig;
}
