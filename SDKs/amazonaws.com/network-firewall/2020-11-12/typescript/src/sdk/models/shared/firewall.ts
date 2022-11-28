import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";



// Firewall
/** 
 * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
**/
export class Firewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteProtection" })
  deleteProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallId" })
  firewallId: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyChangeProtection" })
  firewallPolicyChangeProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubnetChangeProtection" })
  subnetChangeProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubnetMappings", elemType: SubnetMapping })
  subnetMappings: SubnetMapping[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
