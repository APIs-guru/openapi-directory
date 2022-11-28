import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of deployment variables.
**/
export declare class PaginatedDeploymentVariable extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
