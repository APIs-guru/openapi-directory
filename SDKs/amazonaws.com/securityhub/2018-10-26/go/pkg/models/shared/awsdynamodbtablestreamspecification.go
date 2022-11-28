package shared

// AwsDynamoDbTableStreamSpecification
// The current DynamoDB Streams configuration for the table.
type AwsDynamoDbTableStreamSpecification struct {
	StreamEnabled  *bool   `json:"StreamEnabled,omitempty"`
	StreamViewType *string `json:"StreamViewType,omitempty"`
}
