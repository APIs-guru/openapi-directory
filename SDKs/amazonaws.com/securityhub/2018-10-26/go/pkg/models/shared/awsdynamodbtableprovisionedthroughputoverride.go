package shared

type AwsDynamoDbTableProvisionedThroughputOverride struct {
	ReadCapacityUnits *int64 `json:"ReadCapacityUnits"`
}
