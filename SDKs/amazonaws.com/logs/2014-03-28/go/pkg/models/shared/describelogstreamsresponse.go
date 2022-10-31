package shared

type DescribeLogStreamsResponse struct {
	LogStreams []LogStream `json:"logStreams,omitempty"`
	NextToken  *string     `json:"nextToken,omitempty"`
}
