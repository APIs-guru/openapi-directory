package shared



type GetRegionsRequest struct {
    IncludeAvailabilityZones *bool `json:"includeAvailabilityZones,omitempty"`
    IncludeRelationalDatabaseAvailabilityZones *bool `json:"includeRelationalDatabaseAvailabilityZones,omitempty"`
    
}

