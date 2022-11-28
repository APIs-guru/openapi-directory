import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
**/
export declare class DateRange extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
