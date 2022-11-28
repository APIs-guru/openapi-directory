import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of issue tracker versions.
**/
export declare class PaginatedVersions extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
