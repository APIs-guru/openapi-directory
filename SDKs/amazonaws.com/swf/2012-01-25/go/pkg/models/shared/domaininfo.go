package shared

// DomainInfo
// Contains general information about a domain.
type DomainInfo struct {
	Arn         *string                `json:"arn,omitempty"`
	Description *string                `json:"description,omitempty"`
	Name        string                 `json:"name"`
	Status      RegistrationStatusEnum `json:"status"`
}
