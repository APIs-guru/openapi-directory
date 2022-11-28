import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";



export class UpdateRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupArn" })
  ruleGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Rules" })
  rules?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RuleGroupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
