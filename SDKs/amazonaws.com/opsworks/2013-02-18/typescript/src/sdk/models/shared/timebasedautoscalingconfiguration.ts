import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WeeklyAutoScalingSchedule } from "./weeklyautoscalingschedule";


// TimeBasedAutoScalingConfiguration
/** 
 * Describes an instance's time-based auto scaling configuration.
**/
export class TimeBasedAutoScalingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingSchedule" })
  autoScalingSchedule?: WeeklyAutoScalingSchedule;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
