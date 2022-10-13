package shared

type DescribeMaintenanceWindowsResult struct {
	NextToken        *string                     `json:"NextToken"`
	WindowIdentities []MaintenanceWindowIdentity `json:"WindowIdentities"`
}
