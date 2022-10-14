package shared

type TrustedAdvisorResourceDetail struct {
	IsSuppressed *bool    `json:"isSuppressed,omitempty"`
	Metadata     []string `json:"metadata"`
	Region       *string  `json:"region,omitempty"`
	ResourceID   string   `json:"resourceId"`
	Status       string   `json:"status"`
}
