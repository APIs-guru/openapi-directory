import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";
/**
 * Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
**/
export declare class ImageObjectDetectionEvaluationMetrics extends SpeakeasyBase {
    boundingBoxMeanAveragePrecision?: number;
    boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[];
    evaluatedBoundingBoxCount?: number;
}
