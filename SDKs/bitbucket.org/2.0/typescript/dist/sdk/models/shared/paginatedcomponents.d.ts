import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of issue tracker components.
**/
export declare class PaginatedComponents extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
