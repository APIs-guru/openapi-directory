import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A contiguous set of days: startDate, startDate + 1, ..., endDate. Requests are allowed up to 4 date ranges.
**/
export declare class DateRange extends SpeakeasyBase {
    endDate?: string;
    name?: string;
    startDate?: string;
}
