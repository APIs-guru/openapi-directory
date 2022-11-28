import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";



export class DeleteFirewallRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRule" })
  firewallRule?: FirewallRule;
}
