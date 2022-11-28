import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeMonitoringScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
