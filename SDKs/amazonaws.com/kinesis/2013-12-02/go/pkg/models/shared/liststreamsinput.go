package shared

type ListStreamsInput struct {
	ExclusiveStartStreamName *string `json:"ExclusiveStartStreamName"`
	Limit                    *int64  `json:"Limit"`
}
