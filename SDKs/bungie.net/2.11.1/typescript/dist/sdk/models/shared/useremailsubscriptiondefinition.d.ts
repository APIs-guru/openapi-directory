import { SpeakeasyBase } from "../../../internal/utils";
import { UserEMailSettingSubscriptionLocalization } from "./useremailsettingsubscriptionlocalization";
/**
 * Defines a single subscription: permission to send emails for a specific, focused subject (generally timeboxed, such as for a specific release of a product or feature).
**/
export declare class UserEmailSubscriptionDefinition extends SpeakeasyBase {
    localization?: Map<string, UserEMailSettingSubscriptionLocalization>;
    name?: string;
    value?: number;
}
