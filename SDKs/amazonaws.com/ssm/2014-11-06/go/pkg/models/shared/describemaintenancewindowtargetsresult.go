package shared

type DescribeMaintenanceWindowTargetsResult struct {
	NextToken *string                   `json:"NextToken"`
	Targets   []MaintenanceWindowTarget `json:"Targets"`
}
