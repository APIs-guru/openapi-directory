import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;
}
