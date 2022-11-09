import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationContext } from "./notificationcontext";


export class NotifyAppValidationOutputRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: string;

  @Metadata({ data: "json, name=notificationContext" })
  notificationContext?: NotificationContext;
}
