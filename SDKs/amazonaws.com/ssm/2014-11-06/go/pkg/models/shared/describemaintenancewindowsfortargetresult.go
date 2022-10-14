package shared

type DescribeMaintenanceWindowsForTargetResult struct {
	NextToken        *string                              `json:"NextToken,omitempty"`
	WindowIdentities []MaintenanceWindowIdentityForTarget `json:"WindowIdentities,omitempty"`
}
