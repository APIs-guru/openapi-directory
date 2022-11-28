package shared

// AwsDynamoDbTableReplica
// Information about a replica of a DynamoDB table.
type AwsDynamoDbTableReplica struct {
	GlobalSecondaryIndexes        []AwsDynamoDbTableReplicaGlobalSecondaryIndex  `json:"GlobalSecondaryIndexes,omitempty"`
	KmsMasterKeyID                *string                                        `json:"KmsMasterKeyId,omitempty"`
	ProvisionedThroughputOverride *AwsDynamoDbTableProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
	RegionName                    *string                                        `json:"RegionName,omitempty"`
	ReplicaStatus                 *string                                        `json:"ReplicaStatus,omitempty"`
	ReplicaStatusDescription      *string                                        `json:"ReplicaStatusDescription,omitempty"`
}
