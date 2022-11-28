import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFirewallPolicyChangeProtectionRequest extends SpeakeasyBase {
    firewallArn?: string;
    firewallName?: string;
    firewallPolicyChangeProtection: boolean;
    updateToken?: string;
}
