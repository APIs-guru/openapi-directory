import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



export class CreateEventSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventSubscription?: EventSubscription;
}
