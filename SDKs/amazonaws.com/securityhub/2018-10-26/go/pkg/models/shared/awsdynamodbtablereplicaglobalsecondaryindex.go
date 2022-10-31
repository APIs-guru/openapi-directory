package shared



type AwsDynamoDbTableReplicaGlobalSecondaryIndex struct {
    IndexName *string `json:"IndexName,omitempty"`
    ProvisionedThroughputOverride *AwsDynamoDbTableProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
    
}

