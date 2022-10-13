package shared

type DescribeMaintenanceWindowsForTargetRequest struct {
	MaxResults   *int64                            `json:"MaxResults"`
	NextToken    *string                           `json:"NextToken"`
	ResourceType MaintenanceWindowResourceTypeEnum `json:"ResourceType"`
	Targets      []Target                          `json:"Targets"`
}
