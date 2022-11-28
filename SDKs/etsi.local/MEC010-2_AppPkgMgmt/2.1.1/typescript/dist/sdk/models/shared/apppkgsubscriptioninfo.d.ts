import { SpeakeasyBase } from "../../../internal/utils";
import { AppPkgSubscriptionInfoLinks } from "./apppkgsubscriptioninfolinks";
import { AppPkgSubscriptionTypeEnum } from "./apppkgsubscriptiontypeenum";
/**
 * 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
**/
export declare class AppPkgSubscriptionInfo extends SpeakeasyBase {
    links: AppPkgSubscriptionInfoLinks;
    callbackUri: string;
    id: string;
    subscriptionType: AppPkgSubscriptionTypeEnum;
}
