import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleGroupUpdate } from "./rulegroupupdate";


export class UpdateRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.RuleGroupUpdate })
  updates: RuleGroupUpdate[];
}
