package shared

import (
	"time"
)

type GetMaintenanceWindowResult struct {
	AllowUnassociatedTargets *bool      `json:"AllowUnassociatedTargets,omitempty"`
	CreatedDate              *time.Time `json:"CreatedDate,omitempty"`
	Cutoff                   *int64     `json:"Cutoff,omitempty"`
	Description              *string    `json:"Description,omitempty"`
	Duration                 *int64     `json:"Duration,omitempty"`
	Enabled                  *bool      `json:"Enabled,omitempty"`
	EndDate                  *string    `json:"EndDate,omitempty"`
	ModifiedDate             *time.Time `json:"ModifiedDate,omitempty"`
	Name                     *string    `json:"Name,omitempty"`
	NextExecutionTime        *string    `json:"NextExecutionTime,omitempty"`
	Schedule                 *string    `json:"Schedule,omitempty"`
	ScheduleOffset           *int64     `json:"ScheduleOffset,omitempty"`
	ScheduleTimezone         *string    `json:"ScheduleTimezone,omitempty"`
	StartDate                *string    `json:"StartDate,omitempty"`
	WindowID                 *string    `json:"WindowId,omitempty"`
}
