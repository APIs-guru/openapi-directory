import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContributionMatrix } from "./contributionmatrix";
/**
 * Details about a measure affected by an anomaly.
**/
export declare class MetricLevelImpact extends SpeakeasyBase {
    contributionMatrix?: ContributionMatrix;
    metricName?: string;
    numTimeSeries?: number;
}
