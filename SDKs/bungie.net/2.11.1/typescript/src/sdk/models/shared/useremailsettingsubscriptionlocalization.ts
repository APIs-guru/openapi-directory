import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserEMailSettingSubscriptionLocalization
/** 
 * Localized text relevant to a given EMail setting in a given localization. Extra settings specifically for subscriptions.
**/
export class UserEMailSettingSubscriptionLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  knownUserActionText?: string;

  @SpeakeasyMetadata()
  registeredUserDescription?: string;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  unknownUserActionText?: string;

  @SpeakeasyMetadata()
  unknownUserDescription?: string;

  @SpeakeasyMetadata()
  unregisteredUserDescription?: string;
}
