import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMonitoringScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn: string;
}
