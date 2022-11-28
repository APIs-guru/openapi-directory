import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of projects
**/
export declare class PaginatedProjects extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
