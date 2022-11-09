import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";


export class ListFirewallRuleGroupAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupAssociations", elemType: shared.FirewallRuleGroupAssociation })
  firewallRuleGroupAssociations?: FirewallRuleGroupAssociation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
