import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



export class ModifyEventSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventSubscription?: EventSubscription;
}
