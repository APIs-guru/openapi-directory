import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
/**
 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
**/
export declare class ResourceConfig extends SpeakeasyBase {
    instanceCount: number;
    instanceType: TrainingInstanceTypeEnum;
    volumeKmsKeyId?: string;
    volumeSizeInGb: number;
}
