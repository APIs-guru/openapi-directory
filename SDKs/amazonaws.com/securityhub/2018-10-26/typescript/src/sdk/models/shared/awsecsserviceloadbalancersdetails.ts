import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServiceLoadBalancersDetails
/** 
 * Information about a load balancer that the service uses.
**/
export class AwsEcsServiceLoadBalancersDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName?: string;

  @Metadata({ data: "json, name=ContainerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=LoadBalancerName" })
  loadBalancerName?: string;

  @Metadata({ data: "json, name=TargetGroupArn" })
  targetGroupArn?: string;
}
