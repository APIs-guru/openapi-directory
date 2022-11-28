package shared

// AwsDynamoDbTableLocalSecondaryIndex
// Information about a local secondary index for a DynamoDB table.
type AwsDynamoDbTableLocalSecondaryIndex struct {
	IndexArn   *string                     `json:"IndexArn,omitempty"`
	IndexName  *string                     `json:"IndexName,omitempty"`
	KeySchema  []AwsDynamoDbTableKeySchema `json:"KeySchema,omitempty"`
	Projection *AwsDynamoDbTableProjection `json:"Projection,omitempty"`
}
