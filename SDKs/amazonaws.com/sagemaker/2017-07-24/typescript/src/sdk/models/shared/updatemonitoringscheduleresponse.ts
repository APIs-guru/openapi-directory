import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMonitoringScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn: string;
}
