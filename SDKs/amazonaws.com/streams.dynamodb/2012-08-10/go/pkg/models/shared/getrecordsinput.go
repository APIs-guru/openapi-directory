package shared

type GetRecordsInput struct {
	Limit         *int64 `json:"Limit"`
	ShardIterator string `json:"ShardIterator"`
}
