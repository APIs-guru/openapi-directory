package shared



type LabelCounters struct {
    FailedNonRetryableError *int64 `json:"FailedNonRetryableError,omitempty"`
    HumanLabeled *int64 `json:"HumanLabeled,omitempty"`
    MachineLabeled *int64 `json:"MachineLabeled,omitempty"`
    TotalLabeled *int64 `json:"TotalLabeled,omitempty"`
    Unlabeled *int64 `json:"Unlabeled,omitempty"`
    
}

