import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";



export class ListFirewallRuleGroupAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociations", elemType: FirewallRuleGroupAssociation })
  firewallRuleGroupAssociations?: FirewallRuleGroupAssociation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
