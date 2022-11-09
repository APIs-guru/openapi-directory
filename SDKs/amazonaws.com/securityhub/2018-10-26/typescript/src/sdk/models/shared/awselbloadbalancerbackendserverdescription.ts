import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerBackendServerDescription
/** 
 * Provides information about the configuration of an EC2 instance for the load balancer.
**/
export class AwsElbLoadBalancerBackendServerDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstancePort" })
  instancePort?: number;

  @Metadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];
}
