import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paged list of the executions of a schedule.
**/
export declare class PaginatedPipelineScheduleExecutions extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
