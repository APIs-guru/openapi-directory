import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of snippets.
**/
export declare class PaginatedSnippets extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
