package shared

type GetRecordsOutput struct {
	ChildShards        []ChildShard `json:"ChildShards"`
	MillisBehindLatest *int64       `json:"MillisBehindLatest"`
	NextShardIterator  *string      `json:"NextShardIterator"`
	Records            []Record     `json:"Records"`
}
