import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";



export class AssociateFirewallRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociation" })
  firewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
