import { SpeakeasyBase } from "../../../internal/utils";
import { LinkType } from "./linktype";
import { SubscriptionsAppPkgSubscription } from "./subscriptionsapppkgsubscription";
/**
 * Links to resources related to this resource.
**/
export declare class AppPkgSubscriptionLinkListLinks extends SpeakeasyBase {
    self: LinkType;
    subscriptions?: SubscriptionsAppPkgSubscription[];
}
