package shared

type TimeOffRequestsFilterTimeOffRequestStatusEnum string

const (
	TimeOffRequestsFilterTimeOffRequestStatusEnumRequested TimeOffRequestsFilterTimeOffRequestStatusEnum = "requested"
	TimeOffRequestsFilterTimeOffRequestStatusEnumApproved  TimeOffRequestsFilterTimeOffRequestStatusEnum = "approved"
	TimeOffRequestsFilterTimeOffRequestStatusEnumDeclined  TimeOffRequestsFilterTimeOffRequestStatusEnum = "declined"
	TimeOffRequestsFilterTimeOffRequestStatusEnumCancelled TimeOffRequestsFilterTimeOffRequestStatusEnum = "cancelled"
	TimeOffRequestsFilterTimeOffRequestStatusEnumDeleted   TimeOffRequestsFilterTimeOffRequestStatusEnum = "deleted"
	TimeOffRequestsFilterTimeOffRequestStatusEnumOther     TimeOffRequestsFilterTimeOffRequestStatusEnum = "other"
)

type TimeOffRequestsFilter struct {
	EmployeeID           *string                                        `queryParam:"name=employee_id"`
	EndDate              *string                                        `queryParam:"name=end_date"`
	StartDate            *string                                        `queryParam:"name=start_date"`
	TimeOffRequestStatus *TimeOffRequestsFilterTimeOffRequestStatusEnum `queryParam:"name=time_off_request_status"`
}
