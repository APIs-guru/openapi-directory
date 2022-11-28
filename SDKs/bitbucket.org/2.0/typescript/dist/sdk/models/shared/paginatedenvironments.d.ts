import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of environments
**/
export declare class PaginatedEnvironments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
