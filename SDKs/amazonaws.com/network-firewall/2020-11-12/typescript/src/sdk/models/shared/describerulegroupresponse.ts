import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroup } from "./rulegroup";
import { RuleGroupResponse } from "./rulegroupresponse";


export class DescribeRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;

  @Metadata({ data: "json, name=RuleGroupResponse" })
  ruleGroupResponse: RuleGroupResponse;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
