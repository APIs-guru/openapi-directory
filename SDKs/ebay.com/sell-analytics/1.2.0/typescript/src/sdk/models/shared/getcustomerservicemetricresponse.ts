import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetric } from "./dimensionmetric";
import { EvaluationCycle } from "./evaluationcycle";



// GetCustomerServiceMetricResponse
/** 
 * This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
**/
export class GetCustomerServiceMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionMetrics", elemType: DimensionMetric })
  dimensionMetrics?: DimensionMetric[];

  @SpeakeasyMetadata({ data: "json, name=evaluationCycle" })
  evaluationCycle?: EvaluationCycle;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;
}
