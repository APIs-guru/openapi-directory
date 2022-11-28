import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppPkgSubscriptionLinkListLinks } from "./apppkgsubscriptionlinklistlinks";



// AppPkgSubscriptionLinkList
/** 
 * 'The data type represents a subscription link list of notification on application package management'
**/
export class AppPkgSubscriptionLinkList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: AppPkgSubscriptionLinkListLinks;
}
