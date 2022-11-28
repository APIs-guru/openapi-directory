import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  applyType?: string;

  @SpeakeasyMetadata()
  dataType?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isCollection?: boolean;

  @SpeakeasyMetadata()
  isModifiable?: boolean;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  value?: string;
}
