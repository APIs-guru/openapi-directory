import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmStateEnum } from "./alarmstateenum";



export class TestAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmName" })
  alarmName: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: AlarmStateEnum;
}
