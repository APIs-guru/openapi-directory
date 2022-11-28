import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSyncStateEnum } from "./configurationsyncstateenum";
import { FirewallStatusValueEnum } from "./firewallstatusvalueenum";
import { SyncState } from "./syncstate";



// FirewallStatus
/** 
 * Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
**/
export class FirewallStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSyncStateSummary" })
  configurationSyncStateSummary: ConfigurationSyncStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: FirewallStatusValueEnum;

  @SpeakeasyMetadata({ data: "json, name=SyncStates", elemType: SyncState })
  syncStates?: Map<string, SyncState>;
}
