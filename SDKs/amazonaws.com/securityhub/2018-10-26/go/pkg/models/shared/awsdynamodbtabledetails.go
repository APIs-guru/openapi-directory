package shared

// AwsDynamoDbTableDetails
// Provides details about a DynamoDB table.
type AwsDynamoDbTableDetails struct {
	AttributeDefinitions   []AwsDynamoDbTableAttributeDefinition  `json:"AttributeDefinitions,omitempty"`
	BillingModeSummary     *AwsDynamoDbTableBillingModeSummary    `json:"BillingModeSummary,omitempty"`
	CreationDateTime       *string                                `json:"CreationDateTime,omitempty"`
	GlobalSecondaryIndexes []AwsDynamoDbTableGlobalSecondaryIndex `json:"GlobalSecondaryIndexes,omitempty"`
	GlobalTableVersion     *string                                `json:"GlobalTableVersion,omitempty"`
	ItemCount              *int64                                 `json:"ItemCount,omitempty"`
	KeySchema              []AwsDynamoDbTableKeySchema            `json:"KeySchema,omitempty"`
	LatestStreamArn        *string                                `json:"LatestStreamArn,omitempty"`
	LatestStreamLabel      *string                                `json:"LatestStreamLabel,omitempty"`
	LocalSecondaryIndexes  []AwsDynamoDbTableLocalSecondaryIndex  `json:"LocalSecondaryIndexes,omitempty"`
	ProvisionedThroughput  *AwsDynamoDbTableProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
	Replicas               []AwsDynamoDbTableReplica              `json:"Replicas,omitempty"`
	RestoreSummary         *AwsDynamoDbTableRestoreSummary        `json:"RestoreSummary,omitempty"`
	SseDescription         *AwsDynamoDbTableSseDescription        `json:"SseDescription,omitempty"`
	StreamSpecification    *AwsDynamoDbTableStreamSpecification   `json:"StreamSpecification,omitempty"`
	TableID                *string                                `json:"TableId,omitempty"`
	TableName              *string                                `json:"TableName,omitempty"`
	TableSizeBytes         *int64                                 `json:"TableSizeBytes,omitempty"`
	TableStatus            *string                                `json:"TableStatus,omitempty"`
}
