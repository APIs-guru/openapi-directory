package shared

type StartQueryRequest struct {
	EndTime       int64    `json:"endTime"`
	Limit         *int64   `json:"limit,omitempty"`
	LogGroupName  *string  `json:"logGroupName,omitempty"`
	LogGroupNames []string `json:"logGroupNames,omitempty"`
	QueryString   string   `json:"queryString"`
	StartTime     int64    `json:"startTime"`
}
