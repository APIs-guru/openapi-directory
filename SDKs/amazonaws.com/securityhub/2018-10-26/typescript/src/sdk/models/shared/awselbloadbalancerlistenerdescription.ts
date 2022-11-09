import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsElbLoadBalancerListener } from "./awselbloadbalancerlistener";


// AwsElbLoadBalancerListenerDescription
/** 
 * Lists the policies that are enabled for a load balancer listener.
**/
export class AwsElbLoadBalancerListenerDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Listener" })
  listener?: AwsElbLoadBalancerListener;

  @Metadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];
}
