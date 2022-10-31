package shared

type AwsDynamoDbTableBillingModeSummary struct {
	BillingMode                       *string `json:"BillingMode,omitempty"`
	LastUpdateToPayPerRequestDateTime *string `json:"LastUpdateToPayPerRequestDateTime,omitempty"`
}
