import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSyncStateEnum } from "./configurationsyncstateenum";
import { FirewallStatusValueEnum } from "./firewallstatusvalueenum";
import { SyncState } from "./syncstate";
/**
 * Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
**/
export declare class FirewallStatus extends SpeakeasyBase {
    configurationSyncStateSummary: ConfigurationSyncStateEnum;
    status: FirewallStatusValueEnum;
    syncStates?: Map<string, SyncState>;
}
