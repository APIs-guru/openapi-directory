import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationFunctionEnum } from "./aggregationfunctionenum";


// Metric
/** 
 * A calculation made by contrasting a measure and a dimension from your source data.
**/
export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregationFunction" })
  aggregationFunction: AggregationFunctionEnum;

  @Metadata({ data: "json, name=MetricName" })
  metricName: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace?: string;
}
