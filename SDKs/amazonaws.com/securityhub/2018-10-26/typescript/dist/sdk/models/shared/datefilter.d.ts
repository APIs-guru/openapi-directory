import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * A date filter for querying findings.
**/
export declare class DateFilter extends SpeakeasyBase {
    dateRange?: DateRange;
    end?: string;
    start?: string;
}
