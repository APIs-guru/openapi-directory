import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetric } from "./dimensionmetric";
import { EvaluationCycle } from "./evaluationcycle";
/**
 * This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
**/
export declare class GetCustomerServiceMetricResponse extends SpeakeasyBase {
    dimensionMetrics?: DimensionMetric[];
    evaluationCycle?: EvaluationCycle;
    marketplaceId?: string;
}
