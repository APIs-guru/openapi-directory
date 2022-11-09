import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallConfig } from "./firewallconfig";
export declare class ListFirewallConfigsResponse extends SpeakeasyBase {
    firewallConfigs?: FirewallConfig[];
    nextToken?: string;
}
