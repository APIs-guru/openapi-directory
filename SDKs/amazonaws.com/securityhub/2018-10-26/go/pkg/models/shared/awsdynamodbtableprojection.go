package shared

type AwsDynamoDbTableProjection struct {
	NonKeyAttributes []string `json:"NonKeyAttributes,omitempty"`
	ProjectionType   *string  `json:"ProjectionType,omitempty"`
}
