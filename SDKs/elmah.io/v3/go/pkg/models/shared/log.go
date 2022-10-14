package shared

type Log struct {
	Color           *string `json:"color,omitempty"`
	Disabled        *bool   `json:"disabled,omitempty"`
	EnvironmentName *string `json:"environmentName,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
}
