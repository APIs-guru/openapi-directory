import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTransformation } from "./metrictransformation";



// MetricFilter
/** 
 * Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
**/
export class MetricFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=filterName" })
  filterName?: string;

  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricTransformations", elemType: MetricTransformation })
  metricTransformations?: MetricTransformation[];
}
