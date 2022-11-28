import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
export declare class GetAlarmsResult extends SpeakeasyBase {
    alarms?: Alarm[];
    nextPageToken?: string;
}
