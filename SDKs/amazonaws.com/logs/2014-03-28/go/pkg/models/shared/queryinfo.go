package shared

type QueryInfo struct {
	CreateTime   *int64           `json:"createTime"`
	LogGroupName *string          `json:"logGroupName"`
	QueryID      *string          `json:"queryId"`
	QueryString  *string          `json:"queryString"`
	Status       *QueryStatusEnum `json:"status"`
}
