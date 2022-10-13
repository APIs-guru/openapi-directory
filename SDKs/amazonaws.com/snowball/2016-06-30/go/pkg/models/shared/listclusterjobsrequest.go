package shared

type ListClusterJobsRequest struct {
	ClusterID  string  `json:"ClusterId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
