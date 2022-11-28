package shared

// AwsDynamoDbTableAttributeDefinition
// Contains a definition of an attribute for the table.
type AwsDynamoDbTableAttributeDefinition struct {
	AttributeName *string `json:"AttributeName,omitempty"`
	AttributeType *string `json:"AttributeType,omitempty"`
}
