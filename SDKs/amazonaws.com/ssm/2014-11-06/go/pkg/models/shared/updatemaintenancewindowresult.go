package shared



type UpdateMaintenanceWindowResult struct {
    AllowUnassociatedTargets *bool `json:"AllowUnassociatedTargets,omitempty"`
    Cutoff *int64 `json:"Cutoff,omitempty"`
    Description *string `json:"Description,omitempty"`
    Duration *int64 `json:"Duration,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    EndDate *string `json:"EndDate,omitempty"`
    Name *string `json:"Name,omitempty"`
    Schedule *string `json:"Schedule,omitempty"`
    ScheduleOffset *int64 `json:"ScheduleOffset,omitempty"`
    ScheduleTimezone *string `json:"ScheduleTimezone,omitempty"`
    StartDate *string `json:"StartDate,omitempty"`
    WindowID *string `json:"WindowId,omitempty"`
    
}

