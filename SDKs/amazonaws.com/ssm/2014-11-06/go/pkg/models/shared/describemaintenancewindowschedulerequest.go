package shared

type DescribeMaintenanceWindowScheduleRequest struct {
	Filters      []PatchOrchestratorFilter          `json:"Filters"`
	MaxResults   *int64                             `json:"MaxResults"`
	NextToken    *string                            `json:"NextToken"`
	ResourceType *MaintenanceWindowResourceTypeEnum `json:"ResourceType"`
	Targets      []Target                           `json:"Targets"`
	WindowID     *string                            `json:"WindowId"`
}
