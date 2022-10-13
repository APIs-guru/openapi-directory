package shared

type StartQueryRequest struct {
	EndTime       int64    `json:"endTime"`
	Limit         *int64   `json:"limit"`
	LogGroupName  *string  `json:"logGroupName"`
	LogGroupNames []string `json:"logGroupNames"`
	QueryString   string   `json:"queryString"`
	StartTime     int64    `json:"startTime"`
}
