package shared

// CheckDomainTransferabilityRequest
// The CheckDomainTransferability request contains the following elements.
type CheckDomainTransferabilityRequest struct {
	AuthCode   *string `json:"AuthCode,omitempty"`
	DomainName string  `json:"DomainName"`
}
