import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationSummary } from "./notificationsummary";
export declare class ListNotificationsOutput extends SpeakeasyBase {
    nextToken?: string;
    notificationSummaries?: NotificationSummary[];
}
