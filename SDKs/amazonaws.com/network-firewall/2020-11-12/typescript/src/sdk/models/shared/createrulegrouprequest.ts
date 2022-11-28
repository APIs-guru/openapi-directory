import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";



export class CreateRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Capacity" })
  capacity: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupName" })
  ruleGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Rules" })
  rules?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: RuleGroupTypeEnum;
}
