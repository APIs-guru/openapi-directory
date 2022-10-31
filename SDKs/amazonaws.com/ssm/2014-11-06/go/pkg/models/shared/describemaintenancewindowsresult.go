package shared

type DescribeMaintenanceWindowsResult struct {
	NextToken        *string                     `json:"NextToken,omitempty"`
	WindowIdentities []MaintenanceWindowIdentity `json:"WindowIdentities,omitempty"`
}
