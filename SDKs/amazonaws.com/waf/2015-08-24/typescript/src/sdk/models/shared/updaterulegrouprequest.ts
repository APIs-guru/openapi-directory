import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupUpdate } from "./rulegroupupdate";



export class UpdateRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: RuleGroupUpdate })
  updates: RuleGroupUpdate[];
}
