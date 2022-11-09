import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { Tag } from "./tag";


export class CreateMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleConfig" })
  monitoringScheduleConfig: MonitoringScheduleConfig;

  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
