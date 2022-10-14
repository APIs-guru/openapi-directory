package shared

type CountryTargeting struct {
	Countries          []string `json:"countries,omitempty"`
	IncludeRestOfWorld *bool    `json:"includeRestOfWorld,omitempty"`
}
