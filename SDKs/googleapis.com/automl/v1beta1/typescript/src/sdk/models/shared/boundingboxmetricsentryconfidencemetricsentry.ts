import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BoundingBoxMetricsEntryConfidenceMetricsEntry
/** 
 * Metrics for a single confidence threshold.
**/
export class BoundingBoxMetricsEntryConfidenceMetricsEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;
}
