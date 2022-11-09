import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemizedMetricStats
/** 
 * Aggregated statistics about a measure affected by an anomaly.
**/
export class ItemizedMetricStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=OccurrenceCount" })
  occurrenceCount?: number;
}
