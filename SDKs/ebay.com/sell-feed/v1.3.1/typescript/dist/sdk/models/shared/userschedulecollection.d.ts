import { SpeakeasyBase } from "../../../internal/utils";
import { UserScheduleResponse } from "./userscheduleresponse";
/**
 * The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export declare class UserScheduleCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    schedules?: UserScheduleResponse[];
    total?: number;
}
