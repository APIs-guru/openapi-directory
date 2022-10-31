package shared



type CreateMaintenanceWindowRequest struct {
    AllowUnassociatedTargets bool `json:"AllowUnassociatedTargets"`
    ClientToken *string `json:"ClientToken,omitempty"`
    Cutoff int64 `json:"Cutoff"`
    Description *string `json:"Description,omitempty"`
    Duration int64 `json:"Duration"`
    EndDate *string `json:"EndDate,omitempty"`
    Name string `json:"Name"`
    Schedule string `json:"Schedule"`
    ScheduleOffset *int64 `json:"ScheduleOffset,omitempty"`
    ScheduleTimezone *string `json:"ScheduleTimezone,omitempty"`
    StartDate *string `json:"StartDate,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

