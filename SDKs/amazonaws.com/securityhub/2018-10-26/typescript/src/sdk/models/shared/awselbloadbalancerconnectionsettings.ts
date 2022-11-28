import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerConnectionSettings
/** 
 * Contains connection settings for the load balancer.
**/
export class AwsElbLoadBalancerConnectionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdleTimeout" })
  idleTimeout?: number;
}
