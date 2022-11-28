import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscription })
  eventSubscriptionsList?: EventSubscription[];

  @SpeakeasyMetadata()
  marker?: string;
}
