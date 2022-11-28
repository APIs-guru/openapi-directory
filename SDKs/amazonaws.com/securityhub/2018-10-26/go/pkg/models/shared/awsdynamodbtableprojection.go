package shared

// AwsDynamoDbTableProjection
// For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
type AwsDynamoDbTableProjection struct {
	NonKeyAttributes []string `json:"NonKeyAttributes,omitempty"`
	ProjectionType   *string  `json:"ProjectionType,omitempty"`
}
