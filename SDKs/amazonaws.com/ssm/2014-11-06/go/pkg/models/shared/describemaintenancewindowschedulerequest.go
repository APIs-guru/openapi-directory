package shared

type DescribeMaintenanceWindowScheduleRequest struct {
	Filters      []PatchOrchestratorFilter          `json:"Filters,omitempty"`
	MaxResults   *int64                             `json:"MaxResults,omitempty"`
	NextToken    *string                            `json:"NextToken,omitempty"`
	ResourceType *MaintenanceWindowResourceTypeEnum `json:"ResourceType,omitempty"`
	Targets      []Target                           `json:"Targets,omitempty"`
	WindowID     *string                            `json:"WindowId,omitempty"`
}
