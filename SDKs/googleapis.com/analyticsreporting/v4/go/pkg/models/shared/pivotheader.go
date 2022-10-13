package shared

type PivotHeader struct {
	PivotHeaderEntries    []PivotHeaderEntry `json:"pivotHeaderEntries"`
	TotalPivotGroupsCount *int32             `json:"totalPivotGroupsCount"`
}
