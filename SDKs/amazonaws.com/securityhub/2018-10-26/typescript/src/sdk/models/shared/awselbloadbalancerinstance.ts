import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerInstance
/** 
 * Provides information about an EC2 instance for a load balancer.
**/
export class AwsElbLoadBalancerInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
