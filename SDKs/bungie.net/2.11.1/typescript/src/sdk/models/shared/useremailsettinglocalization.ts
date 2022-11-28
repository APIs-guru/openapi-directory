import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserEMailSettingLocalization
/** 
 * Localized text relevant to a given EMail setting in a given localization.
**/
export class UserEMailSettingLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  title?: string;
}
