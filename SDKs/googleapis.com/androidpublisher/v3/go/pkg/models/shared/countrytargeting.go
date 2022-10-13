package shared

type CountryTargeting struct {
	Countries          []string `json:"countries"`
	IncludeRestOfWorld *bool    `json:"includeRestOfWorld"`
}
