package shared

type GetRecordsOutput struct {
	NextShardIterator *string  `json:"NextShardIterator,omitempty"`
	Records           []Record `json:"Records,omitempty"`
}
