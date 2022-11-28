import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;
}
