import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationFunctionEnum } from "./aggregationfunctionenum";



// Metric
/** 
 * A calculation made by contrasting a measure and a dimension from your source data.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregationFunction" })
  aggregationFunction: AggregationFunctionEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: string;
}
