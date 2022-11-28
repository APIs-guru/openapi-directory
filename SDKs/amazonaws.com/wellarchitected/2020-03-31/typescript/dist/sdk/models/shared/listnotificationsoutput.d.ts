import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationSummary } from "./notificationsummary";
export declare class ListNotificationsOutput extends SpeakeasyBase {
    nextToken?: string;
    notificationSummaries?: NotificationSummary[];
}
