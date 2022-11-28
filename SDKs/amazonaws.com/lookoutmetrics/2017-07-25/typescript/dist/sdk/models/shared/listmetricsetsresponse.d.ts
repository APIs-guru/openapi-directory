import { SpeakeasyBase } from "../../../internal/utils";
import { MetricSetSummary } from "./metricsetsummary";
export declare class ListMetricSetsResponse extends SpeakeasyBase {
    metricSetSummaryList?: MetricSetSummary[];
    nextToken?: string;
}
