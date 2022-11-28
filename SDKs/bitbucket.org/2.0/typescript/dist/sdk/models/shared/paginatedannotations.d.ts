import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of annotations.
**/
export declare class PaginatedAnnotations extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
