import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationSpecification } from "./notificationspecification";
export declare class UpdateNotificationSettingsRequest extends SpeakeasyBase {
    active?: boolean;
    hitTypeId: string;
    notification?: NotificationSpecification;
}
