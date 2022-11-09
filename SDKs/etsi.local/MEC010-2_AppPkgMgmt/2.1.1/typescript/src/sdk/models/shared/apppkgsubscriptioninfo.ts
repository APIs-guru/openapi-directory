import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppPkgSubscriptionInfoLinks } from "./apppkgsubscriptioninfolinks";
import { AppPkgSubscriptionTypeEnum } from "./apppkgsubscriptiontypeenum";


// AppPkgSubscriptionInfo
/** 
 * 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
**/
export class AppPkgSubscriptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: AppPkgSubscriptionInfoLinks;

  @Metadata({ data: "json, name=callbackUri" })
  callbackUri: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=subscriptionType" })
  subscriptionType: AppPkgSubscriptionTypeEnum;
}
