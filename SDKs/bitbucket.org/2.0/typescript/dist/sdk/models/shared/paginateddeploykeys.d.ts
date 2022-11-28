import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of deploy keys.
**/
export declare class PaginatedDeployKeys extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
