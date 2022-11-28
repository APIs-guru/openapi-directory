import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of team permissions.
**/
export declare class PaginatedTeamPermissions extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
