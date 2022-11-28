import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
export declare class EventSubscriptionsMessage extends SpeakeasyBase {
    eventSubscriptionsList?: EventSubscription[];
    marker?: string;
}
