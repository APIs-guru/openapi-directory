import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of pullrequest comments.
**/
export declare class PaginatedPullrequestComments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
