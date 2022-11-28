import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmHistoryItem } from "./alarmhistoryitem";



export class DescribeAlarmHistoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AlarmHistoryItem })
  alarmHistoryItems?: AlarmHistoryItem[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
