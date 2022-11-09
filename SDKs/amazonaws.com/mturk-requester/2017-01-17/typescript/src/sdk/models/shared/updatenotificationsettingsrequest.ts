import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationSpecification } from "./notificationspecification";


export class UpdateNotificationSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=HITTypeId" })
  hitTypeId: string;

  @Metadata({ data: "json, name=Notification" })
  notification?: NotificationSpecification;
}
