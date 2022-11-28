import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of repositories.
**/
export declare class PaginatedRepositories extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
