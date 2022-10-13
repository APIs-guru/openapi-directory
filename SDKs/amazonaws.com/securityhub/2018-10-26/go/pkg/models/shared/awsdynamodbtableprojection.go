package shared

type AwsDynamoDbTableProjection struct {
	NonKeyAttributes []string `json:"NonKeyAttributes"`
	ProjectionType   *string  `json:"ProjectionType"`
}
