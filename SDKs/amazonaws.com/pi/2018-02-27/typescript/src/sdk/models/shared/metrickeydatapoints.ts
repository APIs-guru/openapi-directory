import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";
import { ResponseResourceMetricKey } from "./responseresourcemetrickey";



// MetricKeyDataPoints
/** 
 * A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
**/
export class MetricKeyDataPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataPoints", elemType: DataPoint })
  dataPoints?: DataPoint[];

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: ResponseResourceMetricKey;
}
