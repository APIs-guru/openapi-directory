import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerConnectionDraining
/** 
 * Contains information about the connection draining configuration for the load balancer.
**/
export class AwsElbLoadBalancerConnectionDraining extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;
}
