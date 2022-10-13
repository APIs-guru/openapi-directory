package shared

import (
	"time"
)

type GetMaintenanceWindowResult struct {
	AllowUnassociatedTargets *bool      `json:"AllowUnassociatedTargets"`
	CreatedDate              *time.Time `json:"CreatedDate"`
	Cutoff                   *int64     `json:"Cutoff"`
	Description              *string    `json:"Description"`
	Duration                 *int64     `json:"Duration"`
	Enabled                  *bool      `json:"Enabled"`
	EndDate                  *string    `json:"EndDate"`
	ModifiedDate             *time.Time `json:"ModifiedDate"`
	Name                     *string    `json:"Name"`
	NextExecutionTime        *string    `json:"NextExecutionTime"`
	Schedule                 *string    `json:"Schedule"`
	ScheduleOffset           *int64     `json:"ScheduleOffset"`
	ScheduleTimezone         *string    `json:"ScheduleTimezone"`
	StartDate                *string    `json:"StartDate"`
	WindowID                 *string    `json:"WindowId"`
}
