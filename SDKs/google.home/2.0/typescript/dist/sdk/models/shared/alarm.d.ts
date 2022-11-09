import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatePattern } from "./datepattern";
import { TimePattern } from "./timepattern";
export declare class Alarm extends SpeakeasyBase {
    datePattern: DatePattern;
    fireTime: number;
    id: string;
    status: number;
    timePattern: TimePattern;
}
