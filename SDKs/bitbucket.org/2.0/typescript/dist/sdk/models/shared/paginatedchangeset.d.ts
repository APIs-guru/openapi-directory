import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of commits.
**/
export declare class PaginatedChangeset extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
