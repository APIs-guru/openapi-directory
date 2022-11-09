import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";
/**
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
**/
export declare class FirewallDomainList extends SpeakeasyBase {
    arn?: string;
    creationTime?: string;
    creatorRequestId?: string;
    domainCount?: number;
    id?: string;
    managedOwnerName?: string;
    modificationTime?: string;
    name?: string;
    status?: FirewallDomainListStatusEnum;
    statusMessage?: string;
}
