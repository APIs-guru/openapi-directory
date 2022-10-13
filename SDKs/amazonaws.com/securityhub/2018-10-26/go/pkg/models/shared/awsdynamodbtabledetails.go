package shared

type AwsDynamoDbTableDetails struct {
	AttributeDefinitions   []AwsDynamoDbTableAttributeDefinition  `json:"AttributeDefinitions"`
	BillingModeSummary     *AwsDynamoDbTableBillingModeSummary    `json:"BillingModeSummary"`
	CreationDateTime       *string                                `json:"CreationDateTime"`
	GlobalSecondaryIndexes []AwsDynamoDbTableGlobalSecondaryIndex `json:"GlobalSecondaryIndexes"`
	GlobalTableVersion     *string                                `json:"GlobalTableVersion"`
	ItemCount              *int64                                 `json:"ItemCount"`
	KeySchema              []AwsDynamoDbTableKeySchema            `json:"KeySchema"`
	LatestStreamArn        *string                                `json:"LatestStreamArn"`
	LatestStreamLabel      *string                                `json:"LatestStreamLabel"`
	LocalSecondaryIndexes  []AwsDynamoDbTableLocalSecondaryIndex  `json:"LocalSecondaryIndexes"`
	ProvisionedThroughput  *AwsDynamoDbTableProvisionedThroughput `json:"ProvisionedThroughput"`
	Replicas               []AwsDynamoDbTableReplica              `json:"Replicas"`
	RestoreSummary         *AwsDynamoDbTableRestoreSummary        `json:"RestoreSummary"`
	SseDescription         *AwsDynamoDbTableSseDescription        `json:"SseDescription"`
	StreamSpecification    *AwsDynamoDbTableStreamSpecification   `json:"StreamSpecification"`
	TableID                *string                                `json:"TableId"`
	TableName              *string                                `json:"TableName"`
	TableSizeBytes         *int64                                 `json:"TableSizeBytes"`
	TableStatus            *string                                `json:"TableStatus"`
}
