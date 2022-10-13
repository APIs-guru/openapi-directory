package shared

type AwsDynamoDbTableReplica struct {
	GlobalSecondaryIndexes        []AwsDynamoDbTableReplicaGlobalSecondaryIndex  `json:"GlobalSecondaryIndexes"`
	KmsMasterKeyID                *string                                        `json:"KmsMasterKeyId"`
	ProvisionedThroughputOverride *AwsDynamoDbTableProvisionedThroughputOverride `json:"ProvisionedThroughputOverride"`
	RegionName                    *string                                        `json:"RegionName"`
	ReplicaStatus                 *string                                        `json:"ReplicaStatus"`
	ReplicaStatusDescription      *string                                        `json:"ReplicaStatusDescription"`
}
