import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroupResponse } from "./rulegroupresponse";


export class DeleteRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleGroupResponse" })
  ruleGroupResponse: RuleGroupResponse;
}
