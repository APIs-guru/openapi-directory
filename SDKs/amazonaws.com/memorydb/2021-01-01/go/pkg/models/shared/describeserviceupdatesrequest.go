package shared

type DescribeServiceUpdatesRequest struct {
	ClusterNames      []string                  `json:"ClusterNames,omitempty"`
	MaxResults        *int64                    `json:"MaxResults,omitempty"`
	NextToken         *string                   `json:"NextToken,omitempty"`
	ServiceUpdateName *string                   `json:"ServiceUpdateName,omitempty"`
	Status            []ServiceUpdateStatusEnum `json:"Status,omitempty"`
}
