import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricPolicy } from "./metricpolicy";



export class GetMetricPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricPolicy" })
  metricPolicy: MetricPolicy;
}
