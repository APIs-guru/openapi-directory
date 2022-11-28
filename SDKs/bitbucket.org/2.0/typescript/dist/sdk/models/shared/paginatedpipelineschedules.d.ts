import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of schedules
**/
export declare class PaginatedPipelineSchedules extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
