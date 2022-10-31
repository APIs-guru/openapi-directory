package shared

import (
"time")

type TimeOffRequestNotes struct {
    Employee *string `json:"employee,omitempty"`
    Manager *string `json:"manager,omitempty"`
    
}


type TimeOffRequestRequestTypeEnum string

const (
    TimeOffRequestRequestTypeEnumVacaction TimeOffRequestRequestTypeEnum = "vacaction"
TimeOffRequestRequestTypeEnumSick TimeOffRequestRequestTypeEnum = "sick"
TimeOffRequestRequestTypeEnumPersonal TimeOffRequestRequestTypeEnum = "personal"
TimeOffRequestRequestTypeEnumJuryDuty TimeOffRequestRequestTypeEnum = "jury_duty"
TimeOffRequestRequestTypeEnumVolunteer TimeOffRequestRequestTypeEnum = "volunteer"
TimeOffRequestRequestTypeEnumBereavement TimeOffRequestRequestTypeEnum = "bereavement"
TimeOffRequestRequestTypeEnumOther TimeOffRequestRequestTypeEnum = "other"
)



type TimeOffRequestStatusEnum string

const (
    TimeOffRequestStatusEnumRequested TimeOffRequestStatusEnum = "requested"
TimeOffRequestStatusEnumApproved TimeOffRequestStatusEnum = "approved"
TimeOffRequestStatusEnumDeclined TimeOffRequestStatusEnum = "declined"
TimeOffRequestStatusEnumCancelled TimeOffRequestStatusEnum = "cancelled"
TimeOffRequestStatusEnumDeleted TimeOffRequestStatusEnum = "deleted"
TimeOffRequestStatusEnumOther TimeOffRequestStatusEnum = "other"
)



type TimeOffRequestUnitsEnum string

const (
    TimeOffRequestUnitsEnumDays TimeOffRequestUnitsEnum = "days"
TimeOffRequestUnitsEnumHours TimeOffRequestUnitsEnum = "hours"
TimeOffRequestUnitsEnumOther TimeOffRequestUnitsEnum = "other"
)


type TimeOffRequest struct {
    Amount *float64 `json:"amount,omitempty"`
    ApprovalDate *string `json:"approval_date,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Description *string `json:"description,omitempty"`
    EmployeeID *string `json:"employee_id,omitempty"`
    EndDate *string `json:"end_date,omitempty"`
    ID *string `json:"id,omitempty"`
    Notes *TimeOffRequestNotes `json:"notes,omitempty"`
    PolicyID *string `json:"policy_id,omitempty"`
    RequestDate *string `json:"request_date,omitempty"`
    RequestType *TimeOffRequestRequestTypeEnum `json:"request_type,omitempty"`
    StartDate *string `json:"start_date,omitempty"`
    Status *TimeOffRequestStatusEnum `json:"status,omitempty"`
    Units *TimeOffRequestUnitsEnum `json:"units,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

