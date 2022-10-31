package shared



type RegionSet struct {
    RegionExcluded []Region `json:"regionExcluded,omitempty"`
    RegionIncluded []Region `json:"regionIncluded,omitempty"`
    
}

