import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricPolicy } from "./metricpolicy";



export class PutMetricPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=MetricPolicy" })
  metricPolicy: MetricPolicy;
}
