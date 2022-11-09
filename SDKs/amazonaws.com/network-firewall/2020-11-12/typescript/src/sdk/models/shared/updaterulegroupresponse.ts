import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroupResponse } from "./rulegroupresponse";


export class UpdateRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleGroupResponse" })
  ruleGroupResponse: RuleGroupResponse;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
