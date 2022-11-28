import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserEMailSettingSubscriptionLocalization } from "./useremailsettingsubscriptionlocalization";



// UserEmailSubscriptionDefinition
/** 
 * Defines a single subscription: permission to send emails for a specific, focused subject (generally timeboxed, such as for a specific release of a product or feature).
**/
export class UserEmailSubscriptionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserEMailSettingSubscriptionLocalization })
  localization?: Map<string, UserEMailSettingSubscriptionLocalization>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  value?: number;
}
