import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerConnectionDraining
/** 
 * Contains information about the connection draining configuration for the load balancer.
**/
export class AwsElbLoadBalancerConnectionDraining extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;
}
