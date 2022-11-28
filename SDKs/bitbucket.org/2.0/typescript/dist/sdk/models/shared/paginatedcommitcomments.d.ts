import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of commit comments.
**/
export declare class PaginatedCommitComments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
