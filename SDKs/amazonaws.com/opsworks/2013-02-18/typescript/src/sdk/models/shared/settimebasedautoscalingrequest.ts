import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WeeklyAutoScalingSchedule } from "./weeklyautoscalingschedule";


export class SetTimeBasedAutoScalingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingSchedule" })
  autoScalingSchedule?: WeeklyAutoScalingSchedule;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
