import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmTypeEnum } from "./alarmtypeenum";
import { HistoryItemTypeEnum } from "./historyitemtypeenum";



// AlarmHistoryItem
/** 
 * Represents the history of a specific alarm.
**/
export class AlarmHistoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alarmName?: string;

  @SpeakeasyMetadata()
  alarmType?: AlarmTypeEnum;

  @SpeakeasyMetadata()
  historyData?: string;

  @SpeakeasyMetadata()
  historyItemType?: HistoryItemTypeEnum;

  @SpeakeasyMetadata()
  historySummary?: string;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
