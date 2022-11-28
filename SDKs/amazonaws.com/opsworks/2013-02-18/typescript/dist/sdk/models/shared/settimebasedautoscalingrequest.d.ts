import { SpeakeasyBase } from "../../../internal/utils";
import { WeeklyAutoScalingSchedule } from "./weeklyautoscalingschedule";
export declare class SetTimeBasedAutoScalingRequest extends SpeakeasyBase {
    autoScalingSchedule?: WeeklyAutoScalingSchedule;
    instanceId: string;
}
