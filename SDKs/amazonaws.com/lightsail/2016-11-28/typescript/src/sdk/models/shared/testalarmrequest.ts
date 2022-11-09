import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmStateEnum } from "./alarmstateenum";


export class TestAlarmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmName" })
  alarmName: string;

  @Metadata({ data: "json, name=state" })
  state: AlarmStateEnum;
}
