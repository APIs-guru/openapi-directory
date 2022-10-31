package shared

import (
	"time"
)

type DeviceRegistrationWindow struct {
	EndDate    time.Time `json:"endDate"`
	Limit      int32     `json:"limit"`
	PeriodDays int32     `json:"periodDays"`
	Remaining  int32     `json:"remaining"`
	StartDate  time.Time `json:"startDate"`
}
