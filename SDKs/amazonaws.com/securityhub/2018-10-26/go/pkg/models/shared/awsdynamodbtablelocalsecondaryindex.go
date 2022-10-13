package shared

type AwsDynamoDbTableLocalSecondaryIndex struct {
	IndexArn   *string                     `json:"IndexArn"`
	IndexName  *string                     `json:"IndexName"`
	KeySchema  []AwsDynamoDbTableKeySchema `json:"KeySchema"`
	Projection *AwsDynamoDbTableProjection `json:"Projection"`
}
