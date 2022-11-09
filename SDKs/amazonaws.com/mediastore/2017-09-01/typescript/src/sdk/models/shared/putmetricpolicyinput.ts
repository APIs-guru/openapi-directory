import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricPolicy } from "./metricpolicy";


export class PutMetricPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;

  @Metadata({ data: "json, name=MetricPolicy" })
  metricPolicy: MetricPolicy;
}
