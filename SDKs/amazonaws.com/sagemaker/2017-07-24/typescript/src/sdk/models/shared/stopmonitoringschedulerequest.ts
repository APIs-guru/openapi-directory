import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
