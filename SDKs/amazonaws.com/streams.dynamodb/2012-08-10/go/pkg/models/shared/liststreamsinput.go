package shared

type ListStreamsInput struct {
	ExclusiveStartStreamArn *string `json:"ExclusiveStartStreamArn,omitempty"`
	Limit                   *int64  `json:"Limit,omitempty"`
	TableName               *string `json:"TableName,omitempty"`
}
