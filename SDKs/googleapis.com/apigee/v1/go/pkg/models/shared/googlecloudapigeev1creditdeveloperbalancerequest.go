package shared

type GoogleCloudApigeeV1CreditDeveloperBalanceRequest struct {
	TransactionAmount *GoogleTypeMoney `json:"transactionAmount"`
	TransactionID     *string          `json:"transactionId"`
}
