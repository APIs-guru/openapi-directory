package shared

// AssociationFilter
// Describes a filter.
type AssociationFilter struct {
	Key   AssociationFilterKeyEnum `json:"key"`
	Value string                   `json:"value"`
}
