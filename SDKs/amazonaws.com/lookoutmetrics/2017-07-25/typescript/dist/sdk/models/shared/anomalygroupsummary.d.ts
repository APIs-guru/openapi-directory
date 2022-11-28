import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about a group of anomalous metrics.
**/
export declare class AnomalyGroupSummary extends SpeakeasyBase {
    anomalyGroupId?: string;
    anomalyGroupScore?: number;
    endTime?: string;
    primaryMetricName?: string;
    startTime?: string;
}
