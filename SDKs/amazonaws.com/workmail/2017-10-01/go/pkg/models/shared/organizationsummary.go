package shared

// OrganizationSummary
// The representation of an organization.
type OrganizationSummary struct {
	Alias             *string `json:"Alias,omitempty"`
	DefaultMailDomain *string `json:"DefaultMailDomain,omitempty"`
	ErrorMessage      *string `json:"ErrorMessage,omitempty"`
	OrganizationID    *string `json:"OrganizationId,omitempty"`
	State             *string `json:"State,omitempty"`
}
