import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";
export declare class CreateFirewallRequest extends SpeakeasyBase {
    deleteProtection?: boolean;
    description?: string;
    firewallName: string;
    firewallPolicyArn: string;
    firewallPolicyChangeProtection?: boolean;
    subnetChangeProtection?: boolean;
    subnetMappings: SubnetMapping[];
    tags?: Tag[];
    vpcId: string;
}
