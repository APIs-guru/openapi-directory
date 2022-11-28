import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeOffRequestsFilterTimeOffRequestStatusEnum {
    Requested = "requested",
    Approved = "approved",
    Declined = "declined",
    Cancelled = "cancelled",
    Deleted = "deleted",
    Other = "other"
}
export declare class TimeOffRequestsFilter extends SpeakeasyBase {
    employeeId?: string;
    endDate?: string;
    startDate?: string;
    timeOffRequestStatus?: TimeOffRequestsFilterTimeOffRequestStatusEnum;
}
