package shared

type OrgPreReceiveHook struct {
	AllowDownstreamConfiguration *bool   `json:"allow_downstream_configuration"`
	ConfigurationURL             *string `json:"configuration_url"`
	Enforcement                  *string `json:"enforcement"`
	ID                           *int64  `json:"id"`
	Name                         *string `json:"name"`
}
