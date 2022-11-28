import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { NotificationTransportEnum } from "./notificationtransportenum";
/**
 * The NotificationSpecification data structure describes a HIT event notification for a HIT type.
**/
export declare class NotificationSpecification extends SpeakeasyBase {
    destination: string;
    eventTypes: EventTypeEnum[];
    transport: NotificationTransportEnum;
    version: string;
}
