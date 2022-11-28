import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallMetadata } from "./firewallmetadata";
export declare class ListFirewallsResponse extends SpeakeasyBase {
    firewalls?: FirewallMetadata[];
    nextToken?: string;
}
