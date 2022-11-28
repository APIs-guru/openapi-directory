import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";



export class CreateFirewallRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRule" })
  firewallRule?: FirewallRule;
}
