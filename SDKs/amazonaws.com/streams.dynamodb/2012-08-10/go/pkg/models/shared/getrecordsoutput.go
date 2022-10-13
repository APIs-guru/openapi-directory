package shared

type GetRecordsOutput struct {
	NextShardIterator *string  `json:"NextShardIterator"`
	Records           []Record `json:"Records"`
}
