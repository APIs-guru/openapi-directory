import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// EventSubscriptionsMessage
/** 
 * Data returned by the <b>DescribeEventSubscriptions</b> action.
**/
export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscription })
  eventSubscriptionsList?: EventSubscription[];

  @SpeakeasyMetadata()
  marker?: string;
}
