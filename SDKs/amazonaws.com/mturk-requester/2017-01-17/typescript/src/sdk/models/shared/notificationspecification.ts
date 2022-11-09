import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { NotificationTransportEnum } from "./notificationtransportenum";


// NotificationSpecification
/** 
 * The NotificationSpecification data structure describes a HIT event notification for a HIT type.
**/
export class NotificationSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination: string;

  @Metadata({ data: "json, name=EventTypes" })
  eventTypes: EventTypeEnum[];

  @Metadata({ data: "json, name=Transport" })
  transport: NotificationTransportEnum;

  @Metadata({ data: "json, name=Version" })
  version: string;
}
