import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMonitoringScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
