package shared

type CreateMaintenanceWindowRequest struct {
	AllowUnassociatedTargets bool    `json:"AllowUnassociatedTargets"`
	ClientToken              *string `json:"ClientToken"`
	Cutoff                   int64   `json:"Cutoff"`
	Description              *string `json:"Description"`
	Duration                 int64   `json:"Duration"`
	EndDate                  *string `json:"EndDate"`
	Name                     string  `json:"Name"`
	Schedule                 string  `json:"Schedule"`
	ScheduleOffset           *int64  `json:"ScheduleOffset"`
	ScheduleTimezone         *string `json:"ScheduleTimezone"`
	StartDate                *string `json:"StartDate"`
	Tags                     []Tag   `json:"Tags"`
}
