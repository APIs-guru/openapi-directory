import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerHealthCheck
/** 
 * Contains information about the health checks that are conducted on the load balancer.
**/
export class AwsElbLoadBalancerHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthyThreshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=UnhealthyThreshold" })
  unhealthyThreshold?: number;
}
