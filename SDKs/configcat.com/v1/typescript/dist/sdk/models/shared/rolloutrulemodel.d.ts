import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";
export declare class RolloutRuleModel extends SpeakeasyBase {
    comparator?: RolloutRuleComparatorEnum;
    comparisonAttribute: string;
    comparisonValue: string;
    value?: Map<string, any>;
}
