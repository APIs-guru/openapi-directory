package shared

type UpdateMaintenanceWindowRequest struct {
	AllowUnassociatedTargets *bool   `json:"AllowUnassociatedTargets"`
	Cutoff                   *int64  `json:"Cutoff"`
	Description              *string `json:"Description"`
	Duration                 *int64  `json:"Duration"`
	Enabled                  *bool   `json:"Enabled"`
	EndDate                  *string `json:"EndDate"`
	Name                     *string `json:"Name"`
	Replace                  *bool   `json:"Replace"`
	Schedule                 *string `json:"Schedule"`
	ScheduleOffset           *int64  `json:"ScheduleOffset"`
	ScheduleTimezone         *string `json:"ScheduleTimezone"`
	StartDate                *string `json:"StartDate"`
	WindowID                 string  `json:"WindowId"`
}
