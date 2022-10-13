package shared

type BatchGetTracesResult struct {
	NextToken           *string  `json:"NextToken"`
	Traces              []Trace  `json:"Traces"`
	UnprocessedTraceIds []string `json:"UnprocessedTraceIds"`
}
