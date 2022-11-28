import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElbLoadBalancerAccessLog } from "./awselbloadbalanceraccesslog";
import { AwsElbLoadBalancerConnectionDraining } from "./awselbloadbalancerconnectiondraining";
import { AwsElbLoadBalancerConnectionSettings } from "./awselbloadbalancerconnectionsettings";
import { AwsElbLoadBalancerCrossZoneLoadBalancing } from "./awselbloadbalancercrosszoneloadbalancing";



// AwsElbLoadBalancerAttributes
/** 
 * Contains attributes for the load balancer.
**/
export class AwsElbLoadBalancerAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessLog" })
  accessLog?: AwsElbLoadBalancerAccessLog;

  @SpeakeasyMetadata({ data: "json, name=ConnectionDraining" })
  connectionDraining?: AwsElbLoadBalancerConnectionDraining;

  @SpeakeasyMetadata({ data: "json, name=ConnectionSettings" })
  connectionSettings?: AwsElbLoadBalancerConnectionSettings;

  @SpeakeasyMetadata({ data: "json, name=CrossZoneLoadBalancing" })
  crossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
}
