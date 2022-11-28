import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of users.
**/
export declare class PaginatedUsers extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
