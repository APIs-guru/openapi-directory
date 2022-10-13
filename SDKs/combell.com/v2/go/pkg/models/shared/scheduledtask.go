package shared

type ScheduledTask struct {
	CronExpression *string `json:"cron_expression"`
	Enabled        *bool   `json:"enabled"`
	ID             *string `json:"id"`
	ScriptLocation *string `json:"script_location"`
}
