import { SpeakeasyBase } from "../../../internal/utils";
import { DateRangeUnitEnum } from "./daterangeunitenum";
/**
 * A date range for the date filter.
**/
export declare class DateRange extends SpeakeasyBase {
    unit?: DateRangeUnitEnum;
    value?: number;
}
