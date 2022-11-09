import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinkType } from "./linktype";
import { SubscriptionsAppPkgSubscription } from "./subscriptionsapppkgsubscription";


// AppPkgSubscriptionLinkListLinks
/** 
 * Links to resources related to this resource.
**/
export class AppPkgSubscriptionLinkListLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: LinkType;

  @Metadata({ data: "json, name=subscriptions", elemType: shared.SubscriptionsAppPkgSubscription })
  subscriptions?: SubscriptionsAppPkgSubscription[];
}
