import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledAction } from "./scheduledaction";
export declare class ScheduledActionsMessage extends SpeakeasyBase {
    marker?: string;
    scheduledActions?: ScheduledAction[];
}
