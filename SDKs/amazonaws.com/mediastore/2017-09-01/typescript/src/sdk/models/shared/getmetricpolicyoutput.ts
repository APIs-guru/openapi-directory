import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricPolicy } from "./metricpolicy";


export class GetMetricPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricPolicy" })
  metricPolicy: MetricPolicy;
}
