import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of tags.
**/
export declare class PaginatedTags extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
