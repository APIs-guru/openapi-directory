import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFirewallRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;
}
