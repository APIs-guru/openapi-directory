package shared

type DescribeMaintenanceWindowsForTargetRequest struct {
	MaxResults   *int64                            `json:"MaxResults,omitempty"`
	NextToken    *string                           `json:"NextToken,omitempty"`
	ResourceType MaintenanceWindowResourceTypeEnum `json:"ResourceType"`
	Targets      []Target                          `json:"Targets"`
}
