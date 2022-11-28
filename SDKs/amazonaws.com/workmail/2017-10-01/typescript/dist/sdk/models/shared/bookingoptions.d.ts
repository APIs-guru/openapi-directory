import { SpeakeasyBase } from "../../../internal/utils";
/**
 * At least one delegate must be associated to the resource to disable automatic replies from the resource.
**/
export declare class BookingOptions extends SpeakeasyBase {
    autoAcceptRequests?: boolean;
    autoDeclineConflictingRequests?: boolean;
    autoDeclineRecurringRequests?: boolean;
}
