package shared

type ListStreamsInput struct {
	ExclusiveStartStreamArn *string `json:"ExclusiveStartStreamArn"`
	Limit                   *int64  `json:"Limit"`
	TableName               *string `json:"TableName"`
}
