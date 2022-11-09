import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricLevelImpact } from "./metriclevelimpact";


// AnomalyGroup
/** 
 * A group of anomalous metrics
**/
export class AnomalyGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @Metadata({ data: "json, name=AnomalyGroupScore" })
  anomalyGroupScore?: number;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: string;

  @Metadata({ data: "json, name=MetricLevelImpactList", elemType: shared.MetricLevelImpact })
  metricLevelImpactList?: MetricLevelImpact[];

  @Metadata({ data: "json, name=PrimaryMetricName" })
  primaryMetricName?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: string;
}
