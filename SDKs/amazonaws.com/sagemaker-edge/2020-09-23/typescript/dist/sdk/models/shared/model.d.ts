import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeMetric } from "./edgemetric";
/**
 * Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.
**/
export declare class Model extends SpeakeasyBase {
    latestInference?: Date;
    latestSampleTime?: Date;
    modelMetrics?: EdgeMetric[];
    modelName?: string;
    modelVersion?: string;
}
