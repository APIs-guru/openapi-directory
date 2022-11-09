import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsElbLoadBalancerAccessLog } from "./awselbloadbalanceraccesslog";
import { AwsElbLoadBalancerConnectionDraining } from "./awselbloadbalancerconnectiondraining";
import { AwsElbLoadBalancerConnectionSettings } from "./awselbloadbalancerconnectionsettings";
import { AwsElbLoadBalancerCrossZoneLoadBalancing } from "./awselbloadbalancercrosszoneloadbalancing";


// AwsElbLoadBalancerAttributes
/** 
 * Contains attributes for the load balancer.
**/
export class AwsElbLoadBalancerAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessLog" })
  accessLog?: AwsElbLoadBalancerAccessLog;

  @Metadata({ data: "json, name=ConnectionDraining" })
  connectionDraining?: AwsElbLoadBalancerConnectionDraining;

  @Metadata({ data: "json, name=ConnectionSettings" })
  connectionSettings?: AwsElbLoadBalancerConnectionSettings;

  @Metadata({ data: "json, name=CrossZoneLoadBalancing" })
  crossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
}
