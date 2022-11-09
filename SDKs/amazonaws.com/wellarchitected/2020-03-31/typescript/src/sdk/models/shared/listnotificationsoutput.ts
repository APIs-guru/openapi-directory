import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationSummary } from "./notificationsummary";


export class ListNotificationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NotificationSummaries", elemType: shared.NotificationSummary })
  notificationSummaries?: NotificationSummary[];
}
