import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmHistoryItem } from "./alarmhistoryitem";
export declare class DescribeAlarmHistoryOutput extends SpeakeasyBase {
    alarmHistoryItems?: AlarmHistoryItem[];
    nextToken?: string;
}
