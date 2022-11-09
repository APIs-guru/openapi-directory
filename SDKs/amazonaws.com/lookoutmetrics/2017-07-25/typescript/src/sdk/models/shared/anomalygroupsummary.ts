import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnomalyGroupSummary
/** 
 * Details about a group of anomalous metrics.
**/
export class AnomalyGroupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @Metadata({ data: "json, name=AnomalyGroupScore" })
  anomalyGroupScore?: number;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: string;

  @Metadata({ data: "json, name=PrimaryMetricName" })
  primaryMetricName?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: string;
}
