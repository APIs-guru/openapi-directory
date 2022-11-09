import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleGroup } from "./rulegroup";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";


export class CreateRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Capacity" })
  capacity: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;

  @Metadata({ data: "json, name=RuleGroupName" })
  ruleGroupName: string;

  @Metadata({ data: "json, name=Rules" })
  rules?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Type" })
  type: RuleGroupTypeEnum;
}
