import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntryConfidenceMetricsEntry } from "./boundingboxmetricsentryconfidencemetricsentry";



// BoundingBoxMetricsEntry
/** 
 * Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
**/
export class BoundingBoxMetricsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceMetricsEntries", elemType: BoundingBoxMetricsEntryConfidenceMetricsEntry })
  confidenceMetricsEntries?: BoundingBoxMetricsEntryConfidenceMetricsEntry[];

  @SpeakeasyMetadata({ data: "json, name=iouThreshold" })
  iouThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=meanAveragePrecision" })
  meanAveragePrecision?: number;
}
