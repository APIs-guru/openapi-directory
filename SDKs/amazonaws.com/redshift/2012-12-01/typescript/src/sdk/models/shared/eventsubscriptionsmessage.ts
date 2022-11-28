import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// EventSubscriptionsMessage
/** 
 * <p/>
**/
export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscription })
  eventSubscriptionsList?: EventSubscription[];

  @SpeakeasyMetadata()
  marker?: string;
}
