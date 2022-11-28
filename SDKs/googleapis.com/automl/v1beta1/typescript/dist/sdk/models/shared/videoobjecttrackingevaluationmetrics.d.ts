import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";
/**
 * Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).
**/
export declare class VideoObjectTrackingEvaluationMetrics extends SpeakeasyBase {
    boundingBoxMeanAveragePrecision?: number;
    boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[];
    evaluatedBoundingBoxCount?: number;
    evaluatedFrameCount?: number;
}
