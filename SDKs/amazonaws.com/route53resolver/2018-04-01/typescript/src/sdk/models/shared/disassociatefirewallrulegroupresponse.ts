import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";



export class DisassociateFirewallRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociation" })
  firewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
