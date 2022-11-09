import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";


export class RolloutRuleModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: RolloutRuleComparatorEnum;

  @Metadata({ data: "json, name=comparisonAttribute" })
  comparisonAttribute: string;

  @Metadata({ data: "json, name=comparisonValue" })
  comparisonValue: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
