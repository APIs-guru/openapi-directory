import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
