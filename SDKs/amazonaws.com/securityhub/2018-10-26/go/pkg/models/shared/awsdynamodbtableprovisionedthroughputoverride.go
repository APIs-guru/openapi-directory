package shared

// AwsDynamoDbTableProvisionedThroughputOverride
// Replica-specific configuration for the provisioned throughput.
type AwsDynamoDbTableProvisionedThroughputOverride struct {
	ReadCapacityUnits *int64 `json:"ReadCapacityUnits,omitempty"`
}
