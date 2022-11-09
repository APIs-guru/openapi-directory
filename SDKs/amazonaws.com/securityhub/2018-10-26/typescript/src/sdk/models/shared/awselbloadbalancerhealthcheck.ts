import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerHealthCheck
/** 
 * Contains information about the health checks that are conducted on the load balancer.
**/
export class AwsElbLoadBalancerHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthyThreshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=Target" })
  target?: string;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=UnhealthyThreshold" })
  unhealthyThreshold?: number;
}
