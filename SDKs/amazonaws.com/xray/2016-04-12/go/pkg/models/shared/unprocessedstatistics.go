package shared

type UnprocessedStatistics struct {
	ErrorCode *string `json:"ErrorCode"`
	Message   *string `json:"Message"`
	RuleName  *string `json:"RuleName"`
}
