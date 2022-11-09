import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerCrossZoneLoadBalancing
/** 
 * Contains cross-zone load balancing settings for the load balancer.
**/
export class AwsElbLoadBalancerCrossZoneLoadBalancing extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
