import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";


// Firewall
/** 
 * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
**/
export class Firewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteProtection" })
  deleteProtection?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallId" })
  firewallId: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @Metadata({ data: "json, name=FirewallPolicyChangeProtection" })
  firewallPolicyChangeProtection?: boolean;

  @Metadata({ data: "json, name=SubnetChangeProtection" })
  subnetChangeProtection?: boolean;

  @Metadata({ data: "json, name=SubnetMappings", elemType: shared.SubnetMapping })
  subnetMappings: SubnetMapping[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
