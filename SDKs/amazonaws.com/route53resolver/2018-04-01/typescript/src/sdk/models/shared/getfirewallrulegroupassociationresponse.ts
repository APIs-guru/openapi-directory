import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";


export class GetFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupAssociation" })
  firewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
