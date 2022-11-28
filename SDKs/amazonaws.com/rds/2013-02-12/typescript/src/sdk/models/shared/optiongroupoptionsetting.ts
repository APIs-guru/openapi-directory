import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
  settingDescription?: string;

  @SpeakeasyMetadata()
  settingName?: string;
}
