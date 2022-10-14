package shared

type GetLogEventsRequest struct {
	EndTime       *int64  `json:"endTime,omitempty"`
	Limit         *int64  `json:"limit,omitempty"`
	LogGroupName  string  `json:"logGroupName"`
	LogStreamName string  `json:"logStreamName"`
	NextToken     *string `json:"nextToken,omitempty"`
	StartFromHead *bool   `json:"startFromHead,omitempty"`
	StartTime     *int64  `json:"startTime,omitempty"`
}
