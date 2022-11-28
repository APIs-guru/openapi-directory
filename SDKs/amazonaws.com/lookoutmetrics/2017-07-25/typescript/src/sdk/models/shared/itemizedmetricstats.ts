import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemizedMetricStats
/** 
 * Aggregated statistics about a measure affected by an anomaly.
**/
export class ItemizedMetricStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=OccurrenceCount" })
  occurrenceCount?: number;
}
