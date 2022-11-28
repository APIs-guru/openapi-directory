import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of snippet commits.
**/
export declare class PaginatedSnippetCommit extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
