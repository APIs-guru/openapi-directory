package shared



type ScheduledTask struct {
    CronExpression *string `json:"cron_expression,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    ScriptLocation *string `json:"script_location,omitempty"`
    
}

