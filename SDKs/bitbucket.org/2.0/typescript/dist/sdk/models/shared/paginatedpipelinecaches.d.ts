import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of pipeline caches
**/
export declare class PaginatedPipelineCaches extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
