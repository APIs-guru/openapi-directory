package shared

type AwsDynamoDbTableProvisionedThroughput struct {
	LastDecreaseDateTime   *string `json:"LastDecreaseDateTime"`
	LastIncreaseDateTime   *string `json:"LastIncreaseDateTime"`
	NumberOfDecreasesToday *int64  `json:"NumberOfDecreasesToday"`
	ReadCapacityUnits      *int64  `json:"ReadCapacityUnits"`
	WriteCapacityUnits     *int64  `json:"WriteCapacityUnits"`
}
