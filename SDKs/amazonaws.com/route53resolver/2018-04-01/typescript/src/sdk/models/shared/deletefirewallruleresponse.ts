import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallRule } from "./firewallrule";


export class DeleteFirewallRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRule" })
  firewallRule?: FirewallRule;
}
