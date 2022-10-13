package shared

type FinishedWorldsSummary struct {
	FailureSummary  *FailureSummary `json:"failureSummary"`
	FinishedCount   *int64          `json:"finishedCount"`
	SucceededWorlds []string        `json:"succeededWorlds"`
}
