package shared

type DescribeMaintenanceWindowExecutionsRequest struct {
	Filters    []MaintenanceWindowFilter `json:"Filters"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
	WindowID   string                    `json:"WindowId"`
}
