package shared

// PatchFilterGroup
// A set of patch filters, typically used for approval rules.
type PatchFilterGroup struct {
	PatchFilters []PatchFilter `json:"PatchFilters"`
}
