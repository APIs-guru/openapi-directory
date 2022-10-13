package shared

type RegionSet struct {
	RegionExcluded []Region `json:"regionExcluded"`
	RegionIncluded []Region `json:"regionIncluded"`
}
