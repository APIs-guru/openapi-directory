import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of branches.
**/
export declare class PaginatedBranches extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
