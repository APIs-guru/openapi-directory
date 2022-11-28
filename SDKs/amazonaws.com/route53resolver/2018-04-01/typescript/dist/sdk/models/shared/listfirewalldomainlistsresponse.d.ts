import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainListMetadata } from "./firewalldomainlistmetadata";
export declare class ListFirewallDomainListsResponse extends SpeakeasyBase {
    firewallDomainLists?: FirewallDomainListMetadata[];
    nextToken?: string;
}
