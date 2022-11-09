import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRule } from "./firewallrule";


export class ListFirewallRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRules", elemType: shared.FirewallRule })
  firewallRules?: FirewallRule[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
