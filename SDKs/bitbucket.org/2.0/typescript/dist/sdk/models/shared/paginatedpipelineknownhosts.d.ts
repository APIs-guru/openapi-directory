import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of known hosts.
**/
export declare class PaginatedPipelineKnownHosts extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
