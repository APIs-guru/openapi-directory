import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of variables.
**/
export declare class PaginatedPipelineVariables extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
