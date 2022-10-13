package shared

type GetRegionsRequest struct {
	IncludeAvailabilityZones                   *bool `json:"includeAvailabilityZones"`
	IncludeRelationalDatabaseAvailabilityZones *bool `json:"includeRelationalDatabaseAvailabilityZones"`
}
