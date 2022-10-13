package shared

type CheckDomainTransferabilityRequest struct {
	AuthCode   *string `json:"AuthCode"`
	DomainName string  `json:"DomainName"`
}
