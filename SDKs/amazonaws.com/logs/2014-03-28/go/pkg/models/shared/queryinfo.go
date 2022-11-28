package shared

// QueryInfo
// Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.
type QueryInfo struct {
	CreateTime   *int64           `json:"createTime,omitempty"`
	LogGroupName *string          `json:"logGroupName,omitempty"`
	QueryID      *string          `json:"queryId,omitempty"`
	QueryString  *string          `json:"queryString,omitempty"`
	Status       *QueryStatusEnum `json:"status,omitempty"`
}
