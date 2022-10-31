package shared

type QueryInfo struct {
	CreateTime   *int64           `json:"createTime,omitempty"`
	LogGroupName *string          `json:"logGroupName,omitempty"`
	QueryID      *string          `json:"queryId,omitempty"`
	QueryString  *string          `json:"queryString,omitempty"`
	Status       *QueryStatusEnum `json:"status,omitempty"`
}
