package shared

// Region
// This type defines information for a region.
type Region struct {
	RegionName *string `json:"regionName,omitempty"`
	RegionType *string `json:"regionType,omitempty"`
}
