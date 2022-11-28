package shared

// AwsDynamoDbTableBillingModeSummary
// Provides information about the billing for read/write capacity on the table.
type AwsDynamoDbTableBillingModeSummary struct {
	BillingMode                       *string `json:"BillingMode,omitempty"`
	LastUpdateToPayPerRequestDateTime *string `json:"LastUpdateToPayPerRequestDateTime,omitempty"`
}
