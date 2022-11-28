import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerInstance
/** 
 * Provides information about an EC2 instance for a load balancer.
**/
export class AwsElbLoadBalancerInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
