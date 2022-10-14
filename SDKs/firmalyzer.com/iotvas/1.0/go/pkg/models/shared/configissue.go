package shared

type ConfigIssue struct {
	ConfigFile  *string  `json:"config_file,omitempty"`
	Issues      []string `json:"issues,omitempty"`
	ServiceName *string  `json:"service_name,omitempty"`
	Suggestions []string `json:"suggestions,omitempty"`
}
