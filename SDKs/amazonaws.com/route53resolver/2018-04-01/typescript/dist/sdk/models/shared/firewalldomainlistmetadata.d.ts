import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
**/
export declare class FirewallDomainListMetadata extends SpeakeasyBase {
    arn?: string;
    creatorRequestId?: string;
    id?: string;
    managedOwnerName?: string;
    name?: string;
}
