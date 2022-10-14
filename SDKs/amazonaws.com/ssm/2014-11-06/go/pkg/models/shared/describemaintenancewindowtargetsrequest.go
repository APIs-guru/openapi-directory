package shared

type DescribeMaintenanceWindowTargetsRequest struct {
	Filters    []MaintenanceWindowFilter `json:"Filters,omitempty"`
	MaxResults *int64                    `json:"MaxResults,omitempty"`
	NextToken  *string                   `json:"NextToken,omitempty"`
	WindowID   string                    `json:"WindowId"`
}
