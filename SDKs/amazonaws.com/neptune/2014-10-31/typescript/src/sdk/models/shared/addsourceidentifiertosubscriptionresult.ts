import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



export class AddSourceIdentifierToSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventSubscription?: EventSubscription;
}
