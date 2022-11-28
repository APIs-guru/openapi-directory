package shared

// TrustedAdvisorResourceDetail
// Contains information about a resource identified by a Trusted Advisor check.
type TrustedAdvisorResourceDetail struct {
	IsSuppressed *bool    `json:"isSuppressed,omitempty"`
	Metadata     []string `json:"metadata"`
	Region       *string  `json:"region,omitempty"`
	ResourceID   string   `json:"resourceId"`
	Status       string   `json:"status"`
}
