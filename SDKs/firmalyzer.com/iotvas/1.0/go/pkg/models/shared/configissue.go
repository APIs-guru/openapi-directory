package shared

type ConfigIssue struct {
	ConfigFile  *string  `json:"config_file"`
	Issues      []string `json:"issues"`
	ServiceName *string  `json:"service_name"`
	Suggestions []string `json:"suggestions"`
}
