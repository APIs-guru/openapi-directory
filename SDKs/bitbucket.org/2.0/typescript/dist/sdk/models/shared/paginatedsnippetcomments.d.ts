import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of snippet comments.
**/
export declare class PaginatedSnippetComments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
