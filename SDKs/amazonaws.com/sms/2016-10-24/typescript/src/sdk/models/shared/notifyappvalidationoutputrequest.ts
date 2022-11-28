import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationContext } from "./notificationcontext";



export class NotifyAppValidationOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=notificationContext" })
  notificationContext?: NotificationContext;
}
