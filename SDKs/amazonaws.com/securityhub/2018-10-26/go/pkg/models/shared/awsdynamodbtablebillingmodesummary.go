package shared

type AwsDynamoDbTableBillingModeSummary struct {
	BillingMode                       *string `json:"BillingMode"`
	LastUpdateToPayPerRequestDateTime *string `json:"LastUpdateToPayPerRequestDateTime"`
}
