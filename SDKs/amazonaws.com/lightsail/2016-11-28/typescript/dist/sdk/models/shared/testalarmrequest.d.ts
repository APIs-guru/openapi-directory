import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmStateEnum } from "./alarmstateenum";
export declare class TestAlarmRequest extends SpeakeasyBase {
    alarmName: string;
    state: AlarmStateEnum;
}
