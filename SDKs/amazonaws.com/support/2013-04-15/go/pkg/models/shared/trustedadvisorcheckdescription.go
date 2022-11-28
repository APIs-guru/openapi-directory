package shared

// TrustedAdvisorCheckDescription
// The description and metadata for a Trusted Advisor check.
type TrustedAdvisorCheckDescription struct {
	Category    string   `json:"category"`
	Description string   `json:"description"`
	ID          string   `json:"id"`
	Metadata    []string `json:"metadata"`
	Name        string   `json:"name"`
}
