import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingBoxMetricsEntryConfidenceMetricsEntry } from "./boundingboxmetricsentryconfidencemetricsentry";


// BoundingBoxMetricsEntry
/** 
 * Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
**/
export class BoundingBoxMetricsEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceMetricsEntries", elemType: shared.BoundingBoxMetricsEntryConfidenceMetricsEntry })
  confidenceMetricsEntries?: BoundingBoxMetricsEntryConfidenceMetricsEntry[];

  @Metadata({ data: "json, name=iouThreshold" })
  iouThreshold?: number;

  @Metadata({ data: "json, name=meanAveragePrecision" })
  meanAveragePrecision?: number;
}
