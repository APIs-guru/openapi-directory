package shared

type TransferDomainToAnotherAwsAccountRequest struct {
	AccountID  string `json:"AccountId"`
	DomainName string `json:"DomainName"`
}
