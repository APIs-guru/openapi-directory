package shared

type DescribeUserRequest struct {
	ServerID string `json:"ServerId"`
	UserName string `json:"UserName"`
}
