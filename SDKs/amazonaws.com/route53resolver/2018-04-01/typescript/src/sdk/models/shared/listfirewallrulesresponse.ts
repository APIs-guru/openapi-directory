import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";



export class ListFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRules", elemType: FirewallRule })
  firewallRules?: FirewallRule[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
