import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateFirewallRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupAssociationId" })
  firewallRuleGroupAssociationId: string;
}
