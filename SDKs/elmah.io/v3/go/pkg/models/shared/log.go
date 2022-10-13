package shared

type Log struct {
	Color           *string `json:"color"`
	Disabled        *bool   `json:"disabled"`
	EnvironmentName *string `json:"environmentName"`
	ID              *string `json:"id"`
	Name            *string `json:"name"`
}
