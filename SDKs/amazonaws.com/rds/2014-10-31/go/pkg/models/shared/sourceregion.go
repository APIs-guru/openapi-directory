package shared

// SourceRegion
// Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
type SourceRegion struct {
	Endpoint                                      *string
	RegionName                                    *string
	Status                                        *string
	SupportsDbInstanceAutomatedBackupsReplication *bool
}
