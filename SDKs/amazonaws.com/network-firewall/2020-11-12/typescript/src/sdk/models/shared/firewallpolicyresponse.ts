import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";



// FirewallPolicyResponse
/** 
 * The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
**/
export class FirewallPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyId" })
  firewallPolicyId: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyStatus" })
  firewallPolicyStatus?: ResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
