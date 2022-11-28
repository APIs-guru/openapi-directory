import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";



export class GetFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociation" })
  firewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
