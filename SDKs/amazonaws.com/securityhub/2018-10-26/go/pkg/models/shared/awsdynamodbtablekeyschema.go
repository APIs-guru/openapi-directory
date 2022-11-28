package shared

// AwsDynamoDbTableKeySchema
// A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
type AwsDynamoDbTableKeySchema struct {
	AttributeName *string `json:"AttributeName,omitempty"`
	KeyType       *string `json:"KeyType,omitempty"`
}
