import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { FirewallStatus } from "./firewallstatus";
export declare class DeleteFirewallResponse extends SpeakeasyBase {
    firewall?: Firewall;
    firewallStatus?: FirewallStatus;
}
