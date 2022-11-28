import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";



export class RolloutRuleModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: RolloutRuleComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=comparisonAttribute" })
  comparisonAttribute: string;

  @SpeakeasyMetadata({ data: "json, name=comparisonValue" })
  comparisonValue: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
