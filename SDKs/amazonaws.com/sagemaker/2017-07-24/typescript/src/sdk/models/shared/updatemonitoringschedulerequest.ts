import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";



export class UpdateMonitoringScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleConfig" })
  monitoringScheduleConfig: MonitoringScheduleConfig;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
