package shared

type DescribeClustersRequest struct {
	ClusterName      *string `json:"ClusterName"`
	MaxResults       *int64  `json:"MaxResults"`
	NextToken        *string `json:"NextToken"`
	ShowShardDetails *bool   `json:"ShowShardDetails"`
}
