import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";



// MetricQuery
/** 
 * A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
**/
export class MetricQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=GroupBy" })
  groupBy?: DimensionGroup;

  @SpeakeasyMetadata({ data: "json, name=Metric" })
  metric: string;
}
