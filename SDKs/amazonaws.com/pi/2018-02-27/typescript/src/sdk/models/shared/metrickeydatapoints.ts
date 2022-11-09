import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataPoint } from "./datapoint";
import { ResponseResourceMetricKey } from "./responseresourcemetrickey";


// MetricKeyDataPoints
/** 
 * A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
**/
export class MetricKeyDataPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataPoints", elemType: shared.DataPoint })
  dataPoints?: DataPoint[];

  @Metadata({ data: "json, name=Key" })
  key?: ResponseResourceMetricKey;
}
