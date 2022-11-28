import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeeklyAutoScalingSchedule } from "./weeklyautoscalingschedule";



export class SetTimeBasedAutoScalingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingSchedule" })
  autoScalingSchedule?: WeeklyAutoScalingSchedule;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
