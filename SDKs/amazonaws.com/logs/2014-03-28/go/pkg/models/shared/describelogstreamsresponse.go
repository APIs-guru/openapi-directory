package shared

type DescribeLogStreamsResponse struct {
	LogStreams []LogStream `json:"logStreams"`
	NextToken  *string     `json:"nextToken"`
}
