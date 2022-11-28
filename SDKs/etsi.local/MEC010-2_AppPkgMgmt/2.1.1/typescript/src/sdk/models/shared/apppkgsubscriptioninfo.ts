import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppPkgSubscriptionInfoLinks } from "./apppkgsubscriptioninfolinks";
import { AppPkgSubscriptionTypeEnum } from "./apppkgsubscriptiontypeenum";



// AppPkgSubscriptionInfo
/** 
 * 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
**/
export class AppPkgSubscriptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: AppPkgSubscriptionInfoLinks;

  @SpeakeasyMetadata({ data: "json, name=callbackUri" })
  callbackUri: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionType" })
  subscriptionType: AppPkgSubscriptionTypeEnum;
}
