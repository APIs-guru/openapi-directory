package shared

// LocationContext
// Output only. The Geo criteria the restriction applies to.
type LocationContext struct {
	GeoCriteriaIds []int32 `json:"geoCriteriaIds,omitempty"`
}
