import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of issue tracker milestones.
**/
export declare class PaginatedMilestones extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
