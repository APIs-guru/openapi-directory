import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainListMetadata } from "./firewalldomainlistmetadata";
export declare class ListFirewallDomainListsResponse extends SpeakeasyBase {
    firewallDomainLists?: FirewallDomainListMetadata[];
    nextToken?: string;
}
