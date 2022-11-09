import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";
export declare class UpdateFirewallDomainsResponse extends SpeakeasyBase {
    id?: string;
    name?: string;
    status?: FirewallDomainListStatusEnum;
    statusMessage?: string;
}
