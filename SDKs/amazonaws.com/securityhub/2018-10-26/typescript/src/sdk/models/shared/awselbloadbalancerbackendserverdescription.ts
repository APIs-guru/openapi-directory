import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerBackendServerDescription
/** 
 * Provides information about the configuration of an EC2 instance for the load balancer.
**/
export class AwsElbLoadBalancerBackendServerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstancePort" })
  instancePort?: number;

  @SpeakeasyMetadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];
}
