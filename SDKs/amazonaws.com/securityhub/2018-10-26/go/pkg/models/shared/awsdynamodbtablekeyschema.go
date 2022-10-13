package shared

type AwsDynamoDbTableKeySchema struct {
	AttributeName *string `json:"AttributeName"`
	KeyType       *string `json:"KeyType"`
}
