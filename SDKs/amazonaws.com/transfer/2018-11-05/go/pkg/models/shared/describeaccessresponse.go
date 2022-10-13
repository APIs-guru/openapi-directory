package shared

type DescribeAccessResponse struct {
	Access   DescribedAccess `json:"Access"`
	ServerID string          `json:"ServerId"`
}
