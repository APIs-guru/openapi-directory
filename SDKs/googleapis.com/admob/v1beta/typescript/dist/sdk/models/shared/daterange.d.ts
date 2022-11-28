import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Specification of a single date range. Both dates are inclusive.
**/
export declare class DateRange extends SpeakeasyBase {
    endDate?: Date;
    startDate?: Date;
}
