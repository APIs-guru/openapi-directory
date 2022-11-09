import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";


// FirewallPolicyResponse
/** 
 * The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
**/
export class FirewallPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @Metadata({ data: "json, name=FirewallPolicyId" })
  firewallPolicyId: string;

  @Metadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName: string;

  @Metadata({ data: "json, name=FirewallPolicyStatus" })
  firewallPolicyStatus?: ResourceStatusEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
