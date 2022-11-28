import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";
/**
 * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
**/
export declare class Firewall extends SpeakeasyBase {
    deleteProtection?: boolean;
    description?: string;
    firewallArn?: string;
    firewallId: string;
    firewallName?: string;
    firewallPolicyArn: string;
    firewallPolicyChangeProtection?: boolean;
    subnetChangeProtection?: boolean;
    subnetMappings: SubnetMapping[];
    tags?: Tag[];
    vpcId: string;
}
