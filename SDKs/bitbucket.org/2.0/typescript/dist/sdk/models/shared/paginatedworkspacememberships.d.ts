import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of workspace memberships.
**/
export declare class PaginatedWorkspaceMemberships extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
