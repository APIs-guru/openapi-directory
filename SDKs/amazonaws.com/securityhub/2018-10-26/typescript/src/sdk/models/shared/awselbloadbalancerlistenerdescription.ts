import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElbLoadBalancerListener } from "./awselbloadbalancerlistener";



// AwsElbLoadBalancerListenerDescription
/** 
 * Lists the policies that are enabled for a load balancer listener.
**/
export class AwsElbLoadBalancerListenerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listener" })
  listener?: AwsElbLoadBalancerListener;

  @SpeakeasyMetadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];
}
