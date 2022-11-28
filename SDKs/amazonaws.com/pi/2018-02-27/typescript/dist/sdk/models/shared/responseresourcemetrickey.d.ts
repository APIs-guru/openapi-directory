import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object describing a Performance Insights metric and one or more dimensions for that metric.
**/
export declare class ResponseResourceMetricKey extends SpeakeasyBase {
    dimensions?: Map<string, string>;
    metric: string;
}
