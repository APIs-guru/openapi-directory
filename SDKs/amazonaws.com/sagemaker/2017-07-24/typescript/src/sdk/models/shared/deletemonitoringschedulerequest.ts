import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
