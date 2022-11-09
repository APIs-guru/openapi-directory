import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationFunctionEnum } from "./aggregationfunctionenum";
/**
 * A calculation made by contrasting a measure and a dimension from your source data.
**/
export declare class Metric extends SpeakeasyBase {
    aggregationFunction: AggregationFunctionEnum;
    metricName: string;
    namespace?: string;
}
