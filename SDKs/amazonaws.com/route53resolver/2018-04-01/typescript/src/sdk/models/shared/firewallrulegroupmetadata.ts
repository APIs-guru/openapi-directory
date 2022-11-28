import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareStatusEnum } from "./sharestatusenum";



// FirewallRuleGroupMetadata
/** 
 * <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>
**/
export class FirewallRuleGroupMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;
}
