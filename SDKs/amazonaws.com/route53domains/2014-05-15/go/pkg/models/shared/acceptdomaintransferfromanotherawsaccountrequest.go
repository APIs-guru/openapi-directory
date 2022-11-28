package shared

// AcceptDomainTransferFromAnotherAwsAccountRequest
// The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
type AcceptDomainTransferFromAnotherAwsAccountRequest struct {
	DomainName string `json:"DomainName"`
	Password   string `json:"Password"`
}
