import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BoundingBoxMetricsEntryConfidenceMetricsEntry
/** 
 * Metrics for a single confidence threshold.
**/
export class BoundingBoxMetricsEntryConfidenceMetricsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;
}
