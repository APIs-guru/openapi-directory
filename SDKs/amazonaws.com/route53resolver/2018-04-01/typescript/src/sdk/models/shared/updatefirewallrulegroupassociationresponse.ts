import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";



export class UpdateFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociation" })
  firewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
