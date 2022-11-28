import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupResponse } from "./rulegroupresponse";



export class CreateRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleGroupResponse" })
  ruleGroupResponse: RuleGroupResponse;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
