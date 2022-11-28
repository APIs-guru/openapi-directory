import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledWindowExecution } from "./scheduledwindowexecution";
export declare class DescribeMaintenanceWindowScheduleResult extends SpeakeasyBase {
    nextToken?: string;
    scheduledWindowExecutions?: ScheduledWindowExecution[];
}
