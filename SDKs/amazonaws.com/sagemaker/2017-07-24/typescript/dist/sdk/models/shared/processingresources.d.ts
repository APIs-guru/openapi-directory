import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingClusterConfig } from "./processingclusterconfig";
/**
 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
**/
export declare class ProcessingResources extends SpeakeasyBase {
    clusterConfig: ProcessingClusterConfig;
}
