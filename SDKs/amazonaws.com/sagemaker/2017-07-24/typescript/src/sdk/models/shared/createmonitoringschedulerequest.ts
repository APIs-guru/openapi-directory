import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { Tag } from "./tag";



export class CreateMonitoringScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleConfig" })
  monitoringScheduleConfig: MonitoringScheduleConfig;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
