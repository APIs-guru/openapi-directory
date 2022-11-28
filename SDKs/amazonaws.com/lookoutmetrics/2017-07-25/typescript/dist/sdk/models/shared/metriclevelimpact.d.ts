import { SpeakeasyBase } from "../../../internal/utils";
import { ContributionMatrix } from "./contributionmatrix";
/**
 * Details about a measure affected by an anomaly.
**/
export declare class MetricLevelImpact extends SpeakeasyBase {
    contributionMatrix?: ContributionMatrix;
    metricName?: string;
    numTimeSeries?: number;
}
