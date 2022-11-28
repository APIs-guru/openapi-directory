import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimumEngineVersionPerAllowedValue } from "./minimumengineversionperallowedvalue";



// OptionGroupOptionSetting
/** 
 * Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
**/
export class OptionGroupOptionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  applyType?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  isModifiable?: boolean;

  @SpeakeasyMetadata()
  isRequired?: boolean;

  @SpeakeasyMetadata({ elemType: MinimumEngineVersionPerAllowedValue })
  minimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValue[];

  @SpeakeasyMetadata()
  settingDescription?: string;

  @SpeakeasyMetadata()
  settingName?: string;
}
