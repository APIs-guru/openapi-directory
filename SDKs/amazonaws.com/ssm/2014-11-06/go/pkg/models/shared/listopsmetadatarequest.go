package shared

type ListOpsMetadataRequest struct {
	Filters    []OpsMetadataFilter `json:"Filters,omitempty"`
	MaxResults *int64              `json:"MaxResults,omitempty"`
	NextToken  *string             `json:"NextToken,omitempty"`
}
