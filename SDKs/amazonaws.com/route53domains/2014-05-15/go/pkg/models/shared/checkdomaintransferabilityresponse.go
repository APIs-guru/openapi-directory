package shared

// CheckDomainTransferabilityResponse
// The CheckDomainTransferability response includes the following elements.
type CheckDomainTransferabilityResponse struct {
	Transferability DomainTransferability `json:"Transferability"`
}
