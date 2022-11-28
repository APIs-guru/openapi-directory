import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";
/**
 * Configuration for the cluster used to run model monitoring jobs.
**/
export declare class MonitoringClusterConfig extends SpeakeasyBase {
    instanceCount: number;
    instanceType: ProcessingInstanceTypeEnum;
    volumeKmsKeyId?: string;
    volumeSizeInGb: number;
}
