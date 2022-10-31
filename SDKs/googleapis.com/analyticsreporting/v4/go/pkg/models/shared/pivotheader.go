package shared



type PivotHeader struct {
    PivotHeaderEntries []PivotHeaderEntry `json:"pivotHeaderEntries,omitempty"`
    TotalPivotGroupsCount *int32 `json:"totalPivotGroupsCount,omitempty"`
    
}

