import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerSourceSecurityGroup
/** 
 * Contains information about the security group for the load balancer.
**/
export class AwsElbLoadBalancerSourceSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerAlias" })
  ownerAlias?: string;
}
