import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";
import { RuleGroupResponse } from "./rulegroupresponse";



export class DescribeRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupResponse" })
  ruleGroupResponse: RuleGroupResponse;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
