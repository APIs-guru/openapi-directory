package shared



type AwsDynamoDbTableLocalSecondaryIndex struct {
    IndexArn *string `json:"IndexArn,omitempty"`
    IndexName *string `json:"IndexName,omitempty"`
    KeySchema []AwsDynamoDbTableKeySchema `json:"KeySchema,omitempty"`
    Projection *AwsDynamoDbTableProjection `json:"Projection,omitempty"`
    
}

