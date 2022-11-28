import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";



export class ListFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;
}
