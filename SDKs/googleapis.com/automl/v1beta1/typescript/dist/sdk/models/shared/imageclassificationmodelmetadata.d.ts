import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model metadata for image classification.
**/
export declare class ImageClassificationModelMetadata extends SpeakeasyBase {
    baseModelId?: string;
    modelType?: string;
    nodeCount?: string;
    nodeQps?: number;
    stopReason?: string;
    trainBudget?: string;
    trainCost?: string;
}
