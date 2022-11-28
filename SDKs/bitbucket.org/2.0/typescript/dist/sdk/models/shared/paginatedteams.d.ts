import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of teams.
**/
export declare class PaginatedTeams extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
