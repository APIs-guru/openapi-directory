import { SpeakeasyBase } from "../../../internal/utils";
import { HookEvent } from "./hookevent";
/**
 * A paginated list of webhook types available to subscribe on.
**/
export declare class PaginatedHookEvents extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: HookEvent[];
}
