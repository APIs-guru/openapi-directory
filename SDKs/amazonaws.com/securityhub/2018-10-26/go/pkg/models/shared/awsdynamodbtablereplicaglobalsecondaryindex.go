package shared

type AwsDynamoDbTableReplicaGlobalSecondaryIndex struct {
	IndexName                     *string                                        `json:"IndexName"`
	ProvisionedThroughputOverride *AwsDynamoDbTableProvisionedThroughputOverride `json:"ProvisionedThroughputOverride"`
}
