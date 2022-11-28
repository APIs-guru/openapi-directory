import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirewallPolicyMetadata
/** 
 * High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
**/
export class FirewallPolicyMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
