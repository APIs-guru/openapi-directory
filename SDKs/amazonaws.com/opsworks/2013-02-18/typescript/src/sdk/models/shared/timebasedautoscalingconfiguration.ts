import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeeklyAutoScalingSchedule } from "./weeklyautoscalingschedule";



// TimeBasedAutoScalingConfiguration
/** 
 * Describes an instance's time-based auto scaling configuration.
**/
export class TimeBasedAutoScalingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingSchedule" })
  autoScalingSchedule?: WeeklyAutoScalingSchedule;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
