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
	Name *string `json:"name"`
}

type HrisJob struct {
	Department       *string                      `json:"department"`
	EmployeeID       *string                      `json:"employee_id"`
	EmploymentStatus *HrisJobEmploymentStatusEnum `json:"employment_status"`
	EndDate          *time.Time                   `json:"end_date"`
	ID               *string                      `json:"id"`
	Location         *HrisJobLocation             `json:"location"`
	StartDate        *time.Time                   `json:"start_date"`
	Title            *string                      `json:"title"`
}
