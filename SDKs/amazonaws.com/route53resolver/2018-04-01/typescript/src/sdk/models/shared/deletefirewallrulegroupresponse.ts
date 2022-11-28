import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroup } from "./firewallrulegroup";



export class DeleteFirewallRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroup" })
  firewallRuleGroup?: FirewallRuleGroup;
}
