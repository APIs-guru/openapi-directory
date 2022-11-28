import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServiceLoadBalancersDetails
/** 
 * Information about a load balancer that the service uses.
**/
export class AwsEcsServiceLoadBalancersDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContainerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=LoadBalancerName" })
  loadBalancerName?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetGroupArn" })
  targetGroupArn?: string;
}
