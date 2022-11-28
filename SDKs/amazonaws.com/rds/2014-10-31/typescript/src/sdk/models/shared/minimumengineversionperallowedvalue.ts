import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MinimumEngineVersionPerAllowedValue
/** 
 * The minimum DB engine version required for each corresponding allowed value for an option setting.
**/
export class MinimumEngineVersionPerAllowedValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValue?: string;

  @SpeakeasyMetadata()
  minimumEngineVersion?: string;
}
