import { SpeakeasyBase } from "../../../internal/utils";
import { ItemizedMetricStats } from "./itemizedmetricstats";
/**
 * Aggregated statistics for a group of anomalous metrics.
**/
export declare class AnomalyGroupStatistics extends SpeakeasyBase {
    evaluationStartDate?: string;
    itemizedMetricStatsList?: ItemizedMetricStats[];
    totalCount?: number;
}
