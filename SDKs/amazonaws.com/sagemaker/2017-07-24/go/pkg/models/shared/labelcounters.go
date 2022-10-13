package shared

type LabelCounters struct {
	FailedNonRetryableError *int64 `json:"FailedNonRetryableError"`
	HumanLabeled            *int64 `json:"HumanLabeled"`
	MachineLabeled          *int64 `json:"MachineLabeled"`
	TotalLabeled            *int64 `json:"TotalLabeled"`
	Unlabeled               *int64 `json:"Unlabeled"`
}
