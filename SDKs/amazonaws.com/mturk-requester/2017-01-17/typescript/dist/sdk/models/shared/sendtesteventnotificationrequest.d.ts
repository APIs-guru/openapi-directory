import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationSpecification } from "./notificationspecification";
import { EventTypeEnum } from "./eventtypeenum";
export declare class SendTestEventNotificationRequest extends SpeakeasyBase {
    notification: NotificationSpecification;
    testEventType: EventTypeEnum;
}
