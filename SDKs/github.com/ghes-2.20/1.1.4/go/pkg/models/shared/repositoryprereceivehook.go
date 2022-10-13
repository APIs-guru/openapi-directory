package shared

type RepositoryPreReceiveHook struct {
	ConfigurationURL *string `json:"configuration_url"`
	Enforcement      *string `json:"enforcement"`
	ID               *int64  `json:"id"`
	Name             *string `json:"name"`
}
