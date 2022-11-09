import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LensUpgradeSummary } from "./lensupgradesummary";
import { NotificationTypeEnum } from "./notificationtypeenum";
/**
 * A notification summary return object.
**/
export declare class NotificationSummary extends SpeakeasyBase {
    lensUpgradeSummary?: LensUpgradeSummary;
    type?: NotificationTypeEnum;
}
