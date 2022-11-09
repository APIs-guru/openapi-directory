import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationTargetItem } from "./notificationtargetitem";
/**
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
export declare class IncidentTemplate extends SpeakeasyBase {
    dedupeString?: string;
    impact: number;
    notificationTargets?: NotificationTargetItem[];
    summary?: string;
    title: string;
}
