import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnomalyGroupSummary
/** 
 * Details about a group of anomalous metrics.
**/
export class AnomalyGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupScore" })
  anomalyGroupScore?: number;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryMetricName" })
  primaryMetricName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: string;
}
