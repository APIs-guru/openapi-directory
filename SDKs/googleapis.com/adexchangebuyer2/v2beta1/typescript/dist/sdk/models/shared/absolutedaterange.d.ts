import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.
**/
export declare class AbsoluteDateRange extends SpeakeasyBase {
    endDate?: Date;
    startDate?: Date;
}
