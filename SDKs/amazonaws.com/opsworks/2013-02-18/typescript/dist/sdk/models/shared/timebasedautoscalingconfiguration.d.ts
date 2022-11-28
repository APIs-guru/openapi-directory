import { SpeakeasyBase } from "../../../internal/utils";
import { WeeklyAutoScalingSchedule } from "./weeklyautoscalingschedule";
/**
 * Describes an instance's time-based auto scaling configuration.
**/
export declare class TimeBasedAutoScalingConfiguration extends SpeakeasyBase {
    autoScalingSchedule?: WeeklyAutoScalingSchedule;
    instanceId?: string;
}
