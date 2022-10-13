package shared

type AwsDynamoDbTableGlobalSecondaryIndex struct {
	Backfilling           *bool                                  `json:"Backfilling"`
	IndexArn              *string                                `json:"IndexArn"`
	IndexName             *string                                `json:"IndexName"`
	IndexSizeBytes        *int64                                 `json:"IndexSizeBytes"`
	IndexStatus           *string                                `json:"IndexStatus"`
	ItemCount             *int64                                 `json:"ItemCount"`
	KeySchema             []AwsDynamoDbTableKeySchema            `json:"KeySchema"`
	Projection            *AwsDynamoDbTableProjection            `json:"Projection"`
	ProvisionedThroughput *AwsDynamoDbTableProvisionedThroughput `json:"ProvisionedThroughput"`
}
