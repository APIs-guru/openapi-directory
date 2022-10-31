package shared



type AwsDynamoDbTableGlobalSecondaryIndex struct {
    Backfilling *bool `json:"Backfilling,omitempty"`
    IndexArn *string `json:"IndexArn,omitempty"`
    IndexName *string `json:"IndexName,omitempty"`
    IndexSizeBytes *int64 `json:"IndexSizeBytes,omitempty"`
    IndexStatus *string `json:"IndexStatus,omitempty"`
    ItemCount *int64 `json:"ItemCount,omitempty"`
    KeySchema []AwsDynamoDbTableKeySchema `json:"KeySchema,omitempty"`
    Projection *AwsDynamoDbTableProjection `json:"Projection,omitempty"`
    ProvisionedThroughput *AwsDynamoDbTableProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
    
}

