package shared

type QueryTimelineSample struct {
	ActiveUnits            *string `json:"activeUnits,omitempty"`
	CompletedUnits         *string `json:"completedUnits,omitempty"`
	ElapsedMs              *string `json:"elapsedMs,omitempty"`
	EstimatedRunnableUnits *string `json:"estimatedRunnableUnits,omitempty"`
	PendingUnits           *string `json:"pendingUnits,omitempty"`
	TotalSlotMs            *string `json:"totalSlotMs,omitempty"`
}
