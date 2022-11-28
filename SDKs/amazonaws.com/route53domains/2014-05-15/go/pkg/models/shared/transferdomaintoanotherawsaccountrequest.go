package shared

// TransferDomainToAnotherAwsAccountRequest
// The TransferDomainToAnotherAwsAccount request includes the following elements.
type TransferDomainToAnotherAwsAccountRequest struct {
	AccountID  string `json:"AccountId"`
	DomainName string `json:"DomainName"`
}
