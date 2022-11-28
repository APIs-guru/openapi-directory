import { SpeakeasyBase } from "../../../internal/utils";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";
/**
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
**/
export declare class TransformResources extends SpeakeasyBase {
    instanceCount: number;
    instanceType: TransformInstanceTypeEnum;
    volumeKmsKeyId?: string;
}
