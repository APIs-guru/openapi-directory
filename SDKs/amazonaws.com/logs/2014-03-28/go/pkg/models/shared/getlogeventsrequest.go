package shared

type GetLogEventsRequest struct {
	EndTime       *int64  `json:"endTime"`
	Limit         *int64  `json:"limit"`
	LogGroupName  string  `json:"logGroupName"`
	LogStreamName string  `json:"logStreamName"`
	NextToken     *string `json:"nextToken"`
	StartFromHead *bool   `json:"startFromHead"`
	StartTime     *int64  `json:"startTime"`
}
