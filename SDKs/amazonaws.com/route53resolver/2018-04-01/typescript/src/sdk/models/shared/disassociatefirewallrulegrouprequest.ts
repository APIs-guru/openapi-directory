import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateFirewallRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociationId" })
  firewallRuleGroupAssociationId: string;
}
