import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationSyncStateEnum } from "./configurationsyncstateenum";
import { FirewallStatusValueEnum } from "./firewallstatusvalueenum";
import { SyncState } from "./syncstate";


// FirewallStatus
/** 
 * Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
**/
export class FirewallStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSyncStateSummary" })
  configurationSyncStateSummary: ConfigurationSyncStateEnum;

  @Metadata({ data: "json, name=Status" })
  status: FirewallStatusValueEnum;

  @Metadata({ data: "json, name=SyncStates", elemType: shared.SyncState })
  syncStates?: Map<string, SyncState>;
}
