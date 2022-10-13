package shared

type DescribeServiceUpdatesRequest struct {
	ClusterNames      []string                  `json:"ClusterNames"`
	MaxResults        *int64                    `json:"MaxResults"`
	NextToken         *string                   `json:"NextToken"`
	ServiceUpdateName *string                   `json:"ServiceUpdateName"`
	Status            []ServiceUpdateStatusEnum `json:"Status"`
}
