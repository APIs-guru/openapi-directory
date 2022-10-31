package shared

type ListStreamsInput struct {
	ExclusiveStartStreamName *string `json:"ExclusiveStartStreamName,omitempty"`
	Limit                    *int64  `json:"Limit,omitempty"`
}
