import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricLevelImpact } from "./metriclevelimpact";



// AnomalyGroup
/** 
 * A group of anomalous metrics
**/
export class AnomalyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupScore" })
  anomalyGroupScore?: number;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricLevelImpactList", elemType: MetricLevelImpact })
  metricLevelImpactList?: MetricLevelImpact[];

  @SpeakeasyMetadata({ data: "json, name=PrimaryMetricName" })
  primaryMetricName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: string;
}
