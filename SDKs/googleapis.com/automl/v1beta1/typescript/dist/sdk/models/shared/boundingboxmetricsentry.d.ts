import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntryConfidenceMetricsEntry } from "./boundingboxmetricsentryconfidencemetricsentry";
/**
 * Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
**/
export declare class BoundingBoxMetricsEntry extends SpeakeasyBase {
    confidenceMetricsEntries?: BoundingBoxMetricsEntryConfidenceMetricsEntry[];
    iouThreshold?: number;
    meanAveragePrecision?: number;
}
