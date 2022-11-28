import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationSpecification } from "./notificationspecification";



export class UpdateNotificationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HITTypeId" })
  hitTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification?: NotificationSpecification;
}
