import { SpeakeasyBase } from "../../../internal/utils";
import { MinimumEngineVersionPerAllowedValue } from "./minimumengineversionperallowedvalue";
/**
 * Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
**/
export declare class OptionGroupOptionSetting extends SpeakeasyBase {
    allowedValues?: string;
    applyType?: string;
    defaultValue?: string;
    isModifiable?: boolean;
    isRequired?: boolean;
    minimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValue[];
    settingDescription?: string;
    settingName?: string;
}
