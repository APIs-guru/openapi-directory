import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallRuleGroup } from "./firewallrulegroup";


export class CreateFirewallRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroup" })
  firewallRuleGroup?: FirewallRuleGroup;
}
