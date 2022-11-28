package shared

type ListDashboardsOutput struct {
	DashboardEntries []DashboardEntry
	NextToken        *string
}
