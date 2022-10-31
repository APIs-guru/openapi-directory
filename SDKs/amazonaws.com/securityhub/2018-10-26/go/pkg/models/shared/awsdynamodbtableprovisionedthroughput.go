package shared



type AwsDynamoDbTableProvisionedThroughput struct {
    LastDecreaseDateTime *string `json:"LastDecreaseDateTime,omitempty"`
    LastIncreaseDateTime *string `json:"LastIncreaseDateTime,omitempty"`
    NumberOfDecreasesToday *int64 `json:"NumberOfDecreasesToday,omitempty"`
    ReadCapacityUnits *int64 `json:"ReadCapacityUnits,omitempty"`
    WriteCapacityUnits *int64 `json:"WriteCapacityUnits,omitempty"`
    
}

