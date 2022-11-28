import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkType } from "./linktype";
import { SubscriptionsAppPkgSubscription } from "./subscriptionsapppkgsubscription";



// AppPkgSubscriptionLinkListLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgSubscriptionLinkListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinkType;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: SubscriptionsAppPkgSubscription })
  subscriptions?: SubscriptionsAppPkgSubscription[];
}
