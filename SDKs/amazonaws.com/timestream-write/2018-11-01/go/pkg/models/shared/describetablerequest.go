package shared

type DescribeTableRequest struct {
	DatabaseName string `json:"DatabaseName"`
	TableName    string `json:"TableName"`
}
