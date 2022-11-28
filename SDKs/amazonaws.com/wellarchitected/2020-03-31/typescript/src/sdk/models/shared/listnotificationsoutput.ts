import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationSummary } from "./notificationsummary";



export class ListNotificationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationSummaries", elemType: NotificationSummary })
  notificationSummaries?: NotificationSummary[];
}
