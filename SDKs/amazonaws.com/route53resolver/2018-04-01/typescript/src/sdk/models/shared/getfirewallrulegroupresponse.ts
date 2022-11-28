import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroup } from "./firewallrulegroup";



export class GetFirewallRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroup" })
  firewallRuleGroup?: FirewallRuleGroup;
}
