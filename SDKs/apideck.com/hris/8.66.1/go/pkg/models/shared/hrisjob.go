package shared

import (
	"time"
)

type HrisJobEmploymentStatusEnum string

const (
	HrisJobEmploymentStatusEnumActive     HrisJobEmploymentStatusEnum = "active"
	HrisJobEmploymentStatusEnumInactive   HrisJobEmploymentStatusEnum = "inactive"
	HrisJobEmploymentStatusEnumTerminated HrisJobEmploymentStatusEnum = "terminated"
	HrisJobEmploymentStatusEnumOther      HrisJobEmploymentStatusEnum = "other"
)

type HrisJobLocation struct {
	Name *string `json:"name,omitempty"`
}

type HrisJob struct {
	Department       *string                      `json:"department,omitempty"`
	EmployeeID       *string                      `json:"employee_id,omitempty"`
	EmploymentStatus *HrisJobEmploymentStatusEnum `json:"employment_status,omitempty"`
	EndDate          *time.Time                   `json:"end_date,omitempty"`
	ID               *string                      `json:"id,omitempty"`
	Location         *HrisJobLocation             `json:"location,omitempty"`
	StartDate        *time.Time                   `json:"start_date,omitempty"`
	Title            *string                      `json:"title,omitempty"`
}
