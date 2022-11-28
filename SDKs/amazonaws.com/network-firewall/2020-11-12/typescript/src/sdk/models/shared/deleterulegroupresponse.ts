import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupResponse } from "./rulegroupresponse";



export class DeleteRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleGroupResponse" })
  ruleGroupResponse: RuleGroupResponse;
}
