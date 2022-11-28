import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { Tag } from "./tag";
export declare class CreateMonitoringScheduleRequest extends SpeakeasyBase {
    monitoringScheduleConfig: MonitoringScheduleConfig;
    monitoringScheduleName: string;
    tags?: Tag[];
}
