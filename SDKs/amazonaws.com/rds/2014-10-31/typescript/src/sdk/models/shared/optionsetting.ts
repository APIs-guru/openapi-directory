import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionSetting
/** 
 * Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
**/
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
