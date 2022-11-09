import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubsctiptionTypeAppPkgEnum } from "./subsctiptiontypeapppkgenum";


// SubscriptionsAppPkgSubscription
/** 
 * 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'
**/
export class SubscriptionsAppPkgSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=subsctiptionType" })
  subsctiptionType: SubsctiptionTypeAppPkgEnum;
}
