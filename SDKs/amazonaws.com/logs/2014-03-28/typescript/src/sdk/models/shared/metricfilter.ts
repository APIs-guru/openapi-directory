import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricTransformation } from "./metrictransformation";


// MetricFilter
/** 
 * Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
**/
export class MetricFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @Metadata({ data: "json, name=filterName" })
  filterName?: string;

  @Metadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=metricTransformations", elemType: shared.MetricTransformation })
  metricTransformations?: MetricTransformation[];
}
