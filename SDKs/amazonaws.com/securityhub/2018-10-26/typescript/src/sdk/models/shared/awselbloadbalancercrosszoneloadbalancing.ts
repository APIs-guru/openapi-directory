import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerCrossZoneLoadBalancing
/** 
 * Contains cross-zone load balancing settings for the load balancer.
**/
export class AwsElbLoadBalancerCrossZoneLoadBalancing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
