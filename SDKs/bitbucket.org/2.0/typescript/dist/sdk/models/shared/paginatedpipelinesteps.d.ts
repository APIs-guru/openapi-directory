import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of pipeline steps.
**/
export declare class PaginatedPipelineSteps extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
