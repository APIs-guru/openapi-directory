import { SpeakeasyBase } from "../../../internal/utils";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
export declare class UpdateSettingValueModel extends SpeakeasyBase {
    rolloutPercentageItems?: RolloutPercentageItemModel[];
    rolloutRules?: RolloutRuleModel[];
    value?: Map<string, any>;
}
