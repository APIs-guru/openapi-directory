package shared

type FilterLogEventsRequest struct {
	EndTime             *int64   `json:"endTime"`
	FilterPattern       *string  `json:"filterPattern"`
	Interleaved         *bool    `json:"interleaved"`
	Limit               *int64   `json:"limit"`
	LogGroupName        string   `json:"logGroupName"`
	LogStreamNamePrefix *string  `json:"logStreamNamePrefix"`
	LogStreamNames      []string `json:"logStreamNames"`
	NextToken           *string  `json:"nextToken"`
	StartTime           *int64   `json:"startTime"`
}
