import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of deployments
**/
export declare class PaginatedDeployments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
