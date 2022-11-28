import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicy } from "./firewallpolicy";
export declare class UpdateFirewallPolicyRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    firewallPolicy: FirewallPolicy;
    firewallPolicyArn?: string;
    firewallPolicyName?: string;
    updateToken: string;
}
