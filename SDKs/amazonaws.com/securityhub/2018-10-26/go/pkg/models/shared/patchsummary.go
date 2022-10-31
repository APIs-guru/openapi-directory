package shared



type PatchSummary struct {
    FailedCount *int64 `json:"FailedCount,omitempty"`
    ID string `json:"Id"`
    InstalledCount *int64 `json:"InstalledCount,omitempty"`
    InstalledOtherCount *int64 `json:"InstalledOtherCount,omitempty"`
    InstalledPendingReboot *int64 `json:"InstalledPendingReboot,omitempty"`
    InstalledRejectedCount *int64 `json:"InstalledRejectedCount,omitempty"`
    MissingCount *int64 `json:"MissingCount,omitempty"`
    Operation *string `json:"Operation,omitempty"`
    OperationEndTime *string `json:"OperationEndTime,omitempty"`
    OperationStartTime *string `json:"OperationStartTime,omitempty"`
    RebootOption *string `json:"RebootOption,omitempty"`
    
}

