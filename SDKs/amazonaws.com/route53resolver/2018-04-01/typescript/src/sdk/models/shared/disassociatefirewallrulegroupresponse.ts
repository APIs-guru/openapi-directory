import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";


export class DisassociateFirewallRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupAssociation" })
  firewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
