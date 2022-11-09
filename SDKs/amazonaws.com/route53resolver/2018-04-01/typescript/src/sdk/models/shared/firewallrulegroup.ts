import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareStatusEnum } from "./sharestatusenum";
import { FirewallRuleGroupStatusEnum } from "./firewallrulegroupstatusenum";


// FirewallRuleGroup
/** 
 * High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.
**/
export class FirewallRuleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=RuleCount" })
  ruleCount?: number;

  @Metadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @Metadata({ data: "json, name=Status" })
  status?: FirewallRuleGroupStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
