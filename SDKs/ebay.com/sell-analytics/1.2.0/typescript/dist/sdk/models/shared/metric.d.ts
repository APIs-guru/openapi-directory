import { SpeakeasyBase } from "../../../internal/utils";
import { MetricBenchmark } from "./metricbenchmark";
import { MetricDistribution } from "./metricdistribution";
/**
 * This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
**/
export declare class Metric extends SpeakeasyBase {
    benchmark?: MetricBenchmark;
    distributions?: MetricDistribution[];
    metricKey?: string;
    value?: string;
}
