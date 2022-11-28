import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of refs.
**/
export declare class PaginatedRefs extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
