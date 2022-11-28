import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarStateEnum } from "./calendarstateenum";
export declare class GetCalendarStateResponse extends SpeakeasyBase {
    atTime?: string;
    nextTransitionTime?: string;
    state?: CalendarStateEnum;
}
