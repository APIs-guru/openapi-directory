package shared

type QueryTimelineSample struct {
	ActiveUnits            *string `json:"activeUnits"`
	CompletedUnits         *string `json:"completedUnits"`
	ElapsedMs              *string `json:"elapsedMs"`
	EstimatedRunnableUnits *string `json:"estimatedRunnableUnits"`
	PendingUnits           *string `json:"pendingUnits"`
	TotalSlotMs            *string `json:"totalSlotMs"`
}
