import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareStatusEnum } from "./sharestatusenum";
import { FirewallRuleGroupStatusEnum } from "./firewallrulegroupstatusenum";



// FirewallRuleGroup
/** 
 * High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.
**/
export class FirewallRuleGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleCount" })
  ruleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: FirewallRuleGroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
