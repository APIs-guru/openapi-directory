import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubsctiptionTypeAppPkgEnum } from "./subsctiptiontypeapppkgenum";



// SubscriptionsAppPkgSubscription
/** 
 * 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'
**/
export class SubscriptionsAppPkgSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=subsctiptionType" })
  subsctiptionType: SubsctiptionTypeAppPkgEnum;
}
