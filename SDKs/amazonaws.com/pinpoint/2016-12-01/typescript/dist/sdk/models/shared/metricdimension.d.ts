import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
**/
export declare class MetricDimension extends SpeakeasyBase {
    comparisonOperator: string;
    value: number;
}
