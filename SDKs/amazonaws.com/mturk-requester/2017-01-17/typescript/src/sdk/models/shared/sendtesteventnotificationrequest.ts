import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationSpecification } from "./notificationspecification";
import { EventTypeEnum } from "./eventtypeenum";



export class SendTestEventNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification: NotificationSpecification;

  @SpeakeasyMetadata({ data: "json, name=TestEventType" })
  testEventType: EventTypeEnum;
}
