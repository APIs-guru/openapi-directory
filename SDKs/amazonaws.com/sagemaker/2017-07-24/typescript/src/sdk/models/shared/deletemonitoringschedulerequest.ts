import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMonitoringScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
