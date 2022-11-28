import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
/**
 * A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
**/
export declare class MetricQuery extends SpeakeasyBase {
    filter?: Map<string, string>;
    groupBy?: DimensionGroup;
    metric: string;
}
