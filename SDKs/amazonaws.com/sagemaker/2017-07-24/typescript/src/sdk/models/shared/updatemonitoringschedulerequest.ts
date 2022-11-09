import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";


export class UpdateMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleConfig" })
  monitoringScheduleConfig: MonitoringScheduleConfig;

  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
