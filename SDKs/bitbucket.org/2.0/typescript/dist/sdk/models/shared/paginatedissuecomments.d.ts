import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of issue comments.
**/
export declare class PaginatedIssueComments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
