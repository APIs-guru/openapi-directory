package shared

import (
	"time"
)

type TimeOffRequestNotes struct {
	Employee *string `json:"employee"`
	Manager  *string `json:"manager"`
}

type TimeOffRequestRequestTypeEnum string

const (
	TimeOffRequestRequestTypeEnumVacaction   TimeOffRequestRequestTypeEnum = "vacaction"
	TimeOffRequestRequestTypeEnumSick        TimeOffRequestRequestTypeEnum = "sick"
	TimeOffRequestRequestTypeEnumPersonal    TimeOffRequestRequestTypeEnum = "personal"
	TimeOffRequestRequestTypeEnumJuryDuty    TimeOffRequestRequestTypeEnum = "jury_duty"
	TimeOffRequestRequestTypeEnumVolunteer   TimeOffRequestRequestTypeEnum = "volunteer"
	TimeOffRequestRequestTypeEnumBereavement TimeOffRequestRequestTypeEnum = "bereavement"
	TimeOffRequestRequestTypeEnumOther       TimeOffRequestRequestTypeEnum = "other"
)

type TimeOffRequestStatusStatusEnum string

const (
	TimeOffRequestStatusStatusEnumRequested TimeOffRequestStatusStatusEnum = "requested"
	TimeOffRequestStatusStatusEnumApproved  TimeOffRequestStatusStatusEnum = "approved"
	TimeOffRequestStatusStatusEnumDeclined  TimeOffRequestStatusStatusEnum = "declined"
	TimeOffRequestStatusStatusEnumCanceled  TimeOffRequestStatusStatusEnum = "canceled"
	TimeOffRequestStatusStatusEnumDeleted   TimeOffRequestStatusStatusEnum = "deleted"
	TimeOffRequestStatusStatusEnumOther     TimeOffRequestStatusStatusEnum = "other"
)

type TimeOffRequestUnitsEnum string

const (
	TimeOffRequestUnitsEnumDays  TimeOffRequestUnitsEnum = "days"
	TimeOffRequestUnitsEnumHours TimeOffRequestUnitsEnum = "hours"
	TimeOffRequestUnitsEnumOther TimeOffRequestUnitsEnum = "other"
)

type TimeOffRequest struct {
	Amount       *float64                        `json:"amount"`
	ApprovalDate *string                         `json:"approval_date"`
	CreatedAt    *time.Time                      `json:"created_at"`
	CreatedBy    *string                         `json:"created_by"`
	Description  *string                         `json:"description"`
	EmployeeID   *string                         `json:"employee_id"`
	EndDate      *string                         `json:"end_date"`
	ID           *string                         `json:"id"`
	Notes        *TimeOffRequestNotes            `json:"notes"`
	PolicyID     *string                         `json:"policy_id"`
	RequestDate  *string                         `json:"request_date"`
	RequestType  *TimeOffRequestRequestTypeEnum  `json:"request_type"`
	StartDate    *string                         `json:"start_date"`
	Status       *TimeOffRequestStatusStatusEnum `json:"status"`
	Units        *TimeOffRequestUnitsEnum        `json:"units"`
	UpdatedAt    *time.Time                      `json:"updated_at"`
	UpdatedBy    *string                         `json:"updated_by"`
}
