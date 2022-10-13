package shared

type TrustedAdvisorResourceDetail struct {
	IsSuppressed *bool    `json:"isSuppressed"`
	Metadata     []string `json:"metadata"`
	Region       *string  `json:"region"`
	ResourceID   string   `json:"resourceId"`
	Status       string   `json:"status"`
}
