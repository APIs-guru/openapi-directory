import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { NotificationTransportEnum } from "./notificationtransportenum";



// NotificationSpecification
/** 
 * The NotificationSpecification data structure describes a HIT event notification for a HIT type.
**/
export class NotificationSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=EventTypes" })
  eventTypes: EventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Transport" })
  transport: NotificationTransportEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: string;
}
