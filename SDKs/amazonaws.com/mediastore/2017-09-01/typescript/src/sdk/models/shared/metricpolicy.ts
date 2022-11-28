import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerLevelMetricsEnum } from "./containerlevelmetricsenum";
import { MetricPolicyRule } from "./metricpolicyrule";



// MetricPolicy
/** 
 * <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p>
**/
export class MetricPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerLevelMetrics" })
  containerLevelMetrics: ContainerLevelMetricsEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricPolicyRules", elemType: MetricPolicyRule })
  metricPolicyRules?: MetricPolicyRule[];
}
