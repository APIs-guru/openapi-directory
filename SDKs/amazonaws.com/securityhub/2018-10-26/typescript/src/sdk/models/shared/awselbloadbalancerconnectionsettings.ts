import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerConnectionSettings
/** 
 * Contains connection settings for the load balancer.
**/
export class AwsElbLoadBalancerConnectionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdleTimeout" })
  idleTimeout?: number;
}
