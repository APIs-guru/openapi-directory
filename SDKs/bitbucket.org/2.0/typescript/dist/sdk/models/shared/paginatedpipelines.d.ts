import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of pipelines
**/
export declare class PaginatedPipelines extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
