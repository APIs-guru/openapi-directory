package shared

type GetRecordsOutput struct {
	ChildShards        []ChildShard `json:"ChildShards,omitempty"`
	MillisBehindLatest *int64       `json:"MillisBehindLatest,omitempty"`
	NextShardIterator  *string      `json:"NextShardIterator,omitempty"`
	Records            []Record     `json:"Records"`
}
