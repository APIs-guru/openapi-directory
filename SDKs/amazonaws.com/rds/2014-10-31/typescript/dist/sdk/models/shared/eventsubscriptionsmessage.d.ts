import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
/**
 * Data returned by the <b>DescribeEventSubscriptions</b> action.
**/
export declare class EventSubscriptionsMessage extends SpeakeasyBase {
    eventSubscriptionsList?: EventSubscription[];
    marker?: string;
}
