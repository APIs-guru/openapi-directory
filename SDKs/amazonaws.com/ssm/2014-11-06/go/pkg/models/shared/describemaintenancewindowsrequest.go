package shared

type DescribeMaintenanceWindowsRequest struct {
	Filters    []MaintenanceWindowFilter `json:"Filters"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
