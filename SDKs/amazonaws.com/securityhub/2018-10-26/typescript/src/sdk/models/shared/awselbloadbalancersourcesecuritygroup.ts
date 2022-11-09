import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerSourceSecurityGroup
/** 
 * Contains information about the security group for the load balancer.
**/
export class AwsElbLoadBalancerSourceSecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=OwnerAlias" })
  ownerAlias?: string;
}
