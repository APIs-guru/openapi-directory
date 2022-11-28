import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30
**/
export declare class RelativeDateRange extends SpeakeasyBase {
    durationDays?: number;
    offsetDays?: number;
}
