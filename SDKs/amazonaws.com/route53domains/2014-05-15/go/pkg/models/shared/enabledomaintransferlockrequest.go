package shared

// EnableDomainTransferLockRequest
// A request to set the transfer lock for the specified domain.
type EnableDomainTransferLockRequest struct {
	DomainName string `json:"DomainName"`
}
