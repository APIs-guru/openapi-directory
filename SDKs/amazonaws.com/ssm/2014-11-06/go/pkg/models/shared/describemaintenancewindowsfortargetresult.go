package shared

type DescribeMaintenanceWindowsForTargetResult struct {
	NextToken        *string                              `json:"NextToken"`
	WindowIdentities []MaintenanceWindowIdentityForTarget `json:"WindowIdentities"`
}
