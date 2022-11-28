package shared

// AwsDynamoDbTableReplicaGlobalSecondaryIndex
// Information about a global secondary index for a DynamoDB table replica.
type AwsDynamoDbTableReplicaGlobalSecondaryIndex struct {
	IndexName                     *string                                        `json:"IndexName,omitempty"`
	ProvisionedThroughputOverride *AwsDynamoDbTableProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
}
