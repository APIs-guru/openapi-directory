import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainUpdateOperationEnum } from "./firewalldomainupdateoperationenum";
export declare class UpdateFirewallDomainsRequest extends SpeakeasyBase {
    domains: string[];
    firewallDomainListId: string;
    operation: FirewallDomainUpdateOperationEnum;
}
