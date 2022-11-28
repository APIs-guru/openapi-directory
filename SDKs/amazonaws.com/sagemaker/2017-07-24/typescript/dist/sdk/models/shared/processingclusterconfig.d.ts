import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";
/**
 * Configuration for the cluster used to run a processing job.
**/
export declare class ProcessingClusterConfig extends SpeakeasyBase {
    instanceCount: number;
    instanceType: ProcessingInstanceTypeEnum;
    volumeKmsKeyId?: string;
    volumeSizeInGb: number;
}
