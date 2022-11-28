import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopMonitoringScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
