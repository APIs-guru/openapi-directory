package shared

type ListClusterJobsRequest struct {
	ClusterID  string  `json:"ClusterId"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
