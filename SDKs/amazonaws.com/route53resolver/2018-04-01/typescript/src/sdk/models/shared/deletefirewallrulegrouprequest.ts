import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFirewallRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;
}
