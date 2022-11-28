import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of reports.
**/
export declare class PaginatedReports extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
