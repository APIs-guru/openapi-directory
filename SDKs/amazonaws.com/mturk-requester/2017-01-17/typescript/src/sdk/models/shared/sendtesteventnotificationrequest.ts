import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationSpecification } from "./notificationspecification";
import { EventTypeEnum } from "./eventtypeenum";


export class SendTestEventNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notification" })
  notification: NotificationSpecification;

  @Metadata({ data: "json, name=TestEventType" })
  testEventType: EventTypeEnum;
}
