import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicy } from "./firewallpolicy";
import { Tag } from "./tag";
export declare class CreateFirewallPolicyRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    firewallPolicy: FirewallPolicy;
    firewallPolicyName: string;
    tags?: Tag[];
}
