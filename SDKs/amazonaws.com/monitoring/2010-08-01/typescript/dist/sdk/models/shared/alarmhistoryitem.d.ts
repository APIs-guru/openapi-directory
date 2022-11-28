import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmTypeEnum } from "./alarmtypeenum";
import { HistoryItemTypeEnum } from "./historyitemtypeenum";
/**
 * Represents the history of a specific alarm.
**/
export declare class AlarmHistoryItem extends SpeakeasyBase {
    alarmName?: string;
    alarmType?: AlarmTypeEnum;
    historyData?: string;
    historyItemType?: HistoryItemTypeEnum;
    historySummary?: string;
    timestamp?: Date;
}
