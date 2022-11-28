import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model metadata specific to image object detection.
**/
export declare class ImageObjectDetectionModelMetadata extends SpeakeasyBase {
    modelType?: string;
    nodeCount?: string;
    nodeQps?: number;
    stopReason?: string;
    trainBudgetMilliNodeHours?: string;
    trainCostMilliNodeHours?: string;
}
