package shared

// PivotHeader
// The headers for each of the pivot sections defined in the request.
type PivotHeader struct {
	PivotHeaderEntries    []PivotHeaderEntry `json:"pivotHeaderEntries,omitempty"`
	TotalPivotGroupsCount *int32             `json:"totalPivotGroupsCount,omitempty"`
}
