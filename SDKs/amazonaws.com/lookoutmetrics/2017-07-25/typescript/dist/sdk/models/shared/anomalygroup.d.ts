import { SpeakeasyBase } from "../../../internal/utils";
import { MetricLevelImpact } from "./metriclevelimpact";
/**
 * A group of anomalous metrics
**/
export declare class AnomalyGroup extends SpeakeasyBase {
    anomalyGroupId?: string;
    anomalyGroupScore?: number;
    endTime?: string;
    metricLevelImpactList?: MetricLevelImpact[];
    primaryMetricName?: string;
    startTime?: string;
}
